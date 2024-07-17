App = {
    load: async () => {
        await App.loadweb3()
    }
}

$(() => {
    $(window).load(() => {
        App.load()

    })
})