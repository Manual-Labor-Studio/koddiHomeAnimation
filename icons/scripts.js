$('#graphline1').animate(
    { 'x2': "35.6"},
        {
          step: (x2) => $('graphline1').attr('x2', x2),
          duration: 300
        }
);