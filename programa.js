// Code for 2023

const handleChoseView = (e) => {
    console.log(e.target.id);
    resetSelectDay();
    resetViewDay();
    $(`#${e.target.id}`).addClass('dateActive');
    switch (e.target.id) {
        case 'selectDay13':
            $('#viewDay13').removeClass('hide-container');
            $('.programDay-container').css({'border-left':'8px solid var(--program-color-1)'})
            break;
        case 'selectDay14':
            $('#viewDay14').removeClass('hide-container');
            $('.programDay-container').css({'border-left':'8px solid var(--program-color-2)'})
            break;
        case 'selectDay15':
            $('#viewDay15').removeClass('hide-container');
            $('.programDay-container').css({'border-left':'8px solid var(--program-color-3)'})
            break;
        case 'selectDay16':
            $('#viewDay16').removeClass('hide-container');
            $('.programDay-container').css({'border-left':'8px solid var(--program-color-4)'})
            break;
        case 'selectDay17':
            $('#viewDay17').removeClass('hide-container');
            $('.programDay-container').css({'border-left':'8px solid var(--program-color-5)'})
            break;
    }


}

const resetSelectDay = () => {
    $('.selectDay').removeClass('dateActive')
}

const resetViewDay = () => {
    $('.viewDay').addClass('hide-container')
}

// Code for 2020
