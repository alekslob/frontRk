export default{
    state:{
        date: '',
        isValid: false,
        viewConfig: false,
        chageConfig: false,
    },
    actions:{
        async getLicenseInfo(state){
            try{
                const response = await fetch("/license");
                if (response.status!=200) {
                    const message = await response.text()
                    throw new Error(message);
                }
                const data = await response.json()
                state.commit('updateLicenseInfo', data)
                state.dispatch('setMessage', "норм")
            }
            catch (err) {
                state.dispatch('setMessage', err.message)
                throw err
            }
        }
    },
    mutations:{
        updateLicenseInfo(state, licenseInfo){
            state.date = licenseInfo.expire_date
            state.isValid = false//licenseInfo.valid
            state.viewConfig = licenseInfo.features.find(e => e.id==1) != undefined
            state.changeConfig = licenseInfo.features.find(e => e.id==1) != undefined
        }
    },
    getters:{
        getLicenseValid(state){
            return state.isValid
        },
        getLicenseDate(state){
            return state.date
        },
        getLicenseViewConfig(state){
            return state.viewConfig
        },
        getLicenseCangeConfig(state){
            return state.changeConfig
        },
    }
}