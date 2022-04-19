import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const store = createStore({
  state: {
    users: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }
  },
  actions: {
    async signup ({ commit }, details) {
      console.log(details)
      const { email, password } = details
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        console.log(auth.currentUser)
      } catch (err) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use')
            break
          case 'auth/invalid-email':
            alert('Invalid email')
            break
          case 'auth/weak-password':
            alert('Password is too weak')
            break
          case 'auth/operation-not-allowed':
            alert('Operation not allowed')
            break
          default:
            alert('Something went wrong')
        }

        return
      }
      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async login ({ commit }, details) {
      const { email, password } = details
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (err) {
        switch (err.code) {
          case 'auth/user-not-found':
            alert('User not found')
            break
          case 'auth/wrong-password':
            alert('Wrong password')
            break
          default:
            alert('Something went wrong')
        }

        return
      }
      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async logout ({ commit }, details) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user) {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        } else {
          commit('CLEAR_USER')
        }
      })
    }
  }
})

export default store
