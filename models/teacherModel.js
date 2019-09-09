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
		type: mysequelize.Sequelize.BIGINT,
		allowNull : false
	},

	last_name: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	dob: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	gender: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	phone: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	address: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	email: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	password: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	profileImage: {
		type: mysequelize.Sequelize.STRING,
		allowNull : true
	},

	bio: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	verify: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false,
        defaultValue: 0
    }

},

{
	freezeTableName : true,
	tableName: 'teacher'
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