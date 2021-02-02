function addG7(params) {
    console.log("G6数据信息")
}



function deleteG6(params) {
    console.log("删除G6数据源")
}

function deleteG7(params) {
    console.log("删除G6数据源")
}

function deleteG7(params) {
    console.log("删除G6数据源")
}+!!



  wx.showLoading({
        title: "loading...",
        icon: "none",
        success: () => {
          app.globalData.isShowLoading = true ;
        },
      });
      Promise.all(app.globalData.promiseArr).then(res=>{
        console.log(res)
        app.globalData.promiseArr = []
        if (app.globalData.isShowLoading) {
          wx.hideLoading()
          app.globalData.isShowLoading = false
        }
    }).catch(err=>{

    })


