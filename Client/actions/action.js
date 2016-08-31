import request from 'superagent'
import initialState from '../initialstate.js'
import React from 'react'


const receiveAccountTransaction = function (data = initialState) {
 return {
   type: 'GET_ACCOUNT_TRANSACTIONS',
   payload: data
 }
}

function fetchAccountTransaction () {
 return ({dispatch}) => {
   request
     .get('/api/v1/accounts/:id/transactions')
     .end((err, res) => {
       if (err) {
         console.error(err.message)
         return
       }
       dispatch(receiveAccountTransaction(res.body))
     })
 }
}

 module.exports={
   receiveAccountTransaction,
   fetchAccountTransaction
 }
