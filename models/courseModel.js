var mysequelize = require('../configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
{
	id: {
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull : false
	},

	title: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	description: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	credit: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},
	fee: {
		type: mysequelize.Sequelize.INTEGER,
		allowNull : false
	},
	course_image: {
		type: mysequelize.Sequelize.STRING,
		allowNull : true
	},
	start_date: {
		type: mysequelize.Sequelize.DATE,
		allowNull : false
	},

	end_date: {
		type: mysequelize.Sequelize.DATE,
		allowNull : false
	}
	},


{
	freezeTableName : true,
	tableName: 'course'
}

)

myUsers.sync({force:true})


module.exports = myUsers;