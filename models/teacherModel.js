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

	dob: {
		type: mysequelize.Sequelize.DATE,
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

	profile_image: {
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
    },

	password: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	}
	
},

{
	freezeTableName : true,
	tableName: 'teacher'
}

)

myUsers.sync({force:true})
// .then(function(){
// console.log('admin table created')
// })
// .catch(function(){
// 	console.log('err creating admin table')
// })

module.exports = myUsers;