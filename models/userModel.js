var mysequelize = require('../configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
{
	id: {
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull : false
	},

	first_name: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	
	last_name: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
    },
    last_nlocationame: {
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
	tableName: 'users'
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