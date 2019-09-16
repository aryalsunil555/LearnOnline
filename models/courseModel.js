var mysequelize = require('../configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
{
	id: {
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull : false
	},
	course_image: {
		type: mysequelize.Sequelize.STRING,
        allowNull : true
    },


	course_name: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},


	credit: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
    },
    videos: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false
	},
	description: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false
    },
    author: {
		type: mysequelize.Sequelize.DATE,
        allowNull : false
	},
	
	fee: {
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
