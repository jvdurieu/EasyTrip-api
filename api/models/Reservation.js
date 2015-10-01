/**
* Reservation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	 id_res {
  			type : 'integer',
	  	 	primaryKey: true,
	  	 	autoIncrement: true,
		    required: true
		},
    id_up {
		 	type : 'integer'
    },
    id_price {
   		type : 'integer'
    },
    id_service {
   		type : 'integer'
    },
    d_from {
   		type : 'datetime'
    },
    d_to {
    	type : 'datetime'
    },
    nb_person {
   		type : 'integer'
    },
    d_create {
    	type : 'datetime'
    },
    d_update {
    	type : 'datetime'
    },
    valid {
    	type : 'boolean'	
    }
  }
};

