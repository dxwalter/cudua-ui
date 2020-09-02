export default ({app}, inject) => {

    let getBusinessLogoUrl = (businessId, logoPath) => {

        let extension = logoPath.split('.');

        if (extension[1] != 'jpg') {
            logoPath = `${extension[0]}.jpeg`
        }

        return `https://res.cloudinary.com/cudua-images/image/upload/ar_1:1,b_rgb:ffffff,bo_0px_solid_rgb:ff0000,c_fill,g_auto,o_100,r_max,w_200,f_auto/v1598971119/cudua_commerce/business/${businessId}/logo/${logoPath}`
    }

    inject("getBusinessLogoUrl", getBusinessLogoUrl);


    let getBusinessCoverPhotoUrl = (businessId, coverPath) => {

        let extension = coverPath.split('.');

        if (extension[1] != 'jpg') {
            coverPath = `${extension[0]}.jpeg`
        }

        return `https://res.cloudinary.com/cudua-images/image/upload/w_500,ar_16:9,c_fill,g_auto,e_sharpen,f_auto/v1598985984/cudua_commerce/business/${businessId}/cover/${coverPath}`
    }

    inject("getBusinessCoverPhotoUrl", getBusinessCoverPhotoUrl);

}

