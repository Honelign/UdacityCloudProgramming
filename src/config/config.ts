require('dotenv').config();
export const config = {
  "dev": {
    "username"://"gramhone",// 
      process.env.POSTGRES_USERNAME,
    "password"://"gramhone", 
      process.env.POSTGRES_PASSWORD,
    "database"://"postgres", 
      process.env.POSTGRES_DATABASE,
    "host": //"gramhone.cgs9mmcyrydq.us-east-1.rds.amazonaws.com",//
      process.env.POSTGRES_HOST,
    "dialect"://"postgres", //
      process.env.POSTGRES_DIALECT,
    "aws_region"://"us-east-1",// 
      process.env.AWS_REGION,
    "aws_profile"://"default",// 
      process.env.AWS_PROFILE,
    "aws_media_bucket"://"udagram-hone-dev"// 
      process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": "hellohone"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
