export default ({app}, inject) => {

    let getBusinessLogoUrl = (businessId, logoPath) => {

        let extension = logoPath.split('.');

        if (extension[1] != 'jepg') {
            logoPath = `${extension[0]}.jpeg`
        }

        return `https://res.cloudinary.com/cudua-images/image/upload/w_1000,f_auto,c_fill/v1598967937/cudua_commerce/business/${businessId}/logo/${logoPath}`

    }

    inject("getBusinessLogoUrl", getBusinessLogoUrl);

}

