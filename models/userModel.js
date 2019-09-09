var mysequelize = require('../configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
{
	id: {
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull : false
	},
	profile_image: {
		type: mysequelize.Sequelize.STRING,
        allowNull : true
    },


	first_name: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},


	last_name: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
    },
    Address: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false
	},
	Phone: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false
	},
	
	DOB: {
		type: mysequelize.Sequelize.DATE,
        allowNull : false
	},
	Gender: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false
    },




    verify: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false,
        defaultValue: 0
    },



	email: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},


	password: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	}

},

{
	freezeTableName : true,
	tableName: 'student'
}

)

myUsers.sync({force:false})
// .then(function(){
// console.log('users table created')
// })
// .catch(function(){
// 	console.log('err creating table')
// })

module.exports = myUsers;
