

$(document).ready(() => {
    $(".bilet").on("click", (e) => {
        e.preventDefault()
        $(e.target).removeClass("noactive")
        $(".noactive").hide(1000)
        let currentCardId = e.target.getAttribute("data-id")
        $(`.cardTicket[data-id=${currentCardId }]`).css("opacity", 1)
        $(".cardTicketsAbs").addClass("frontView")
       
    })
    $(".closeTicket").on("click", (e) => {
        e.preventDefault()
        $(".cardTicket").css("opacity", 0)
        $(".bilet").addClass("noactive")
        $(".noactive").show(500)
        $(".cardTicketsAbs").removeClass("frontView")
    })
})