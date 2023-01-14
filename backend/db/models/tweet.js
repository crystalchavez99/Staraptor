// 'use strict';
// const {Model} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Tweet extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     toSafeObject(){
//       const { id, media, message, user_id } = this; // context will be the User instance
//       return { id, media, message, user_id  };
//     }
//     static associate(models) {
//       // define association here
//       Tweet.belongsTo(models.User, {foreignKey: 'user_id'})
//     }

//     static async post({media, message, user_id}){
//       console.log(media, message, user_id)
//       if(media !== null || message !== null){
//         const tweet = await Tweet.create({
//           media, message, user_id
//         })
//         return tweet;
//       }
//     }

//   }
//   Tweet.init({
//     media: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     message: {
//       type: DataTypes.STRING,
//       allowNull: true,
//       validate: {
//         len: [1, 500],
//       }
//     },
//     user_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Tweet',
//     defaultScope: {
//       attributes: {
//         exclude: ["UserId" ]
//       }
//     }
//   });
//   return Tweet;
// };
