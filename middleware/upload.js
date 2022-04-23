const { google } = require('googleapis');
const fs = require('fs')
const path = require('path')
const mime = require('mime')

const oauth2Client = new google.auth.OAuth2(
    '569617431410-lcaugughro9r9g6763rqjr64080dgm8a.apps.googleusercontent.com',
    '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',
    'https://developers.google.com/oauthplayground'
 );
 

 oauth2Client.setCredentials({refresh_token: '1//04leuo4d62TRBCgYIARAAGAQSNwF-L9IrEEHEACpdWnZ6gbk0lkfHM6Ilo4DQHmNwnSBaz3h8trel88bP2DegyFm2YwZtWm-CWBA'})

 const drive = google.drive({
     version:'v3',
     auth: oauth2Client
 })

async function uploadFile(product){
    
    const filePath = path.join(__dirname,'IMG_3938.jpg')

        try {
            const response = await drive.files.create({
                requestBody:{
                    name: 'hehe.jpeg'
                },
                media:{
                    mimeType:mime.getType(filePath),
                    body : fs.createReadStream(filePath)
                }
            })
            
            //generatePublicUrl(response.data.id)
            return generatePublicUrl(response.data.id)
        } catch (error) {
            console.log(error.message,'hello')
            return error.message;
        }
    }

    async function generatePublicUrl(f_id) {
        try {
            const fileId = f_id;
            await drive.permissions.create({
                fileId : fileId,
                requestBody :{
                    role: 'reader',
                    type: 'anyone'
                }
            })
            const result = await drive.files.get({
                fileId: fileId,
                fields: 'webViewLink,webContentLink'
            });
               console.log(result.data)
                return result.data.webContentLink;
        } catch (error) {
            console.log('failed')
            return null;
        }
    }

module.exports = uploadFile;