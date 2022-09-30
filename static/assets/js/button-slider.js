const nextArrowIconWhite = `/icons/ic_right_chevron_white_bg.png`;
const prevArrowIconWhite = `/icons/ic_left_chevron_white_bg.png`;

function button_next_slide_slick_white(size = "44") {
    return `<button type="button" class="slick-next bg-transparent border-0"><img src="${nextArrowIconWhite}" width="${size}"></button>`;
}

function button_prev_slide_slick_white(size = "44") {
    return `<button type="button" class="slick-prev bg-transparent border-0"><img src="${prevArrowIconWhite}" width="${size}"></button>`;
}
const nextArrow = button_next_slide_slick_white();
const prevArrow = button_prev_slide_slick_white();