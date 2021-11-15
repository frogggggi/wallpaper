/*
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 999999],
    connect: true,
    tooltips: [true, true],
    step: 1,
    range: {
      'min': [0],
      'max': [999999]
    },
    format: wNumb({
      decimals: 0, // default is 2
      thousand: ' ', // thousand delimiter
      postfix: ' ', // gets appended after the number
    }),
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
// nice idea !! https://gist.github.com/leongersen/7560025 vs https://jsfiddle.net/w3oLvnyj/6/
*/

/*---=== work ===---*/

const FormatSpace = wNumb({
  decimals: 0, // default is 2
  thousand: ' ', // thousand delimiter
  postfix: '', // gets appended after the number
});
const FormatNoSpace = wNumb({
  decimals: 0, // default is 2
  thousand: '', // thousand delimiter
  postfix: '', // gets appended after the number
});
// FormatSpace.to(
// FormatNoSpace.to(

var rangeSlidersTrack = document.querySelectorAll('.custom-range-slider .custom-range-slider__track');
var rangeSlidersInputFrom = document.querySelectorAll('.custom-range-slider .custom-range-slider__input--from');
var rangeSlidersInputTo = document.querySelectorAll('.custom-range-slider .custom-range-slider__input--to');
var rangeSliderInputs = [];

for(var i = 0; i < rangeSlidersTrack.length; i++) {
  rangeSliderInputs.push([rangeSlidersInputFrom[i], rangeSlidersInputTo[i]]);
}

[].slice.call(rangeSlidersTrack).forEach(function(slider, index) {
  noUiSlider.create(slider, {
    start: [0, 999999],
    connect: true,
    tooltips: [true, true],
    step: 1,
    range: {
      'min': [0],
      'max': [999999]
    },
    format: wNumb({
      decimals: 0, // default is 2
      thousand: ' ', // thousand delimiter
      postfix: '', // gets appended after the number
    }),
  }).on('update', function(values, handle) {
    rangeSliderInputs[index][handle].value = parseInt(FormatNoSpace.from(values[handle]));
  });





  const setSliderHandle = (i, value) => {
    let arr = [null, null];
    arr[i] = FormatSpace.from(value);
    console.log(arr);
    slider.noUiSlider.set(arr);
  };

  rangeSliderInputs[index].forEach(function(input, handle) {

    input.addEventListener('change', function(e){
      setSliderHandle(handle, this.value);
      console.log(1);
    });

    input.addEventListener('keydown', function(e) {

      var values = slider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = slider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {

        case 13:
          setSliderHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if ( position === false ) {
            position = 1;
          }

          // null = edge of slider
          if ( position !== null ) {
            setSliderHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if ( position === false ) {
            position = 1;
          }

          if ( position !== null ) {
            setSliderHandle(handle, value - position);
          }

          break;
      }
    });

  });

});

/*---=== /work ===---*/
