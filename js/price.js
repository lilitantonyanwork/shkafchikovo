const slider = document.getElementById('price');
if(slider){

    noUiSlider.create(slider, {
        start: [3268, 172700],
        connect: true,
        range: {
            'min': 3268,
            'max': 172700
        },
        step: 10,
        format: {
            to: value => `${Math.round(value)}`,
            from: value => Number(value.replace('', ''))
        }
    });

}


const priceMin = document.getElementById('price-min');
const priceMax = document.getElementById('price-max');

if(slider){
    slider.noUiSlider.on('update', (values, handle) => {
        if (handle === 0) {
            priceMin.textContent = values[0];

        } else {
            priceMax.textContent = values[1];

        }
    });
}


