let scrollStart = 0;
const navChange = $('#nav-change');
const offset = navChange.offset().top;
const elements = $('.nav-link')
console.log('elements ', elements);
$(document).scroll(() => {
  scrollStart = $(this).scrollTop();
  if(scrollStart > offset - 75) {
    $('.navbar').addClass('navbar-light');
    $('.navbar').addClass('bg-light');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = 'inherit';
    }
  } else{
    $('.navbar').removeClass('navbar-light');
    $('.navbar').removeClass('bg-light');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = 'whitesmoke';
    }
  }
});

$('#textarea')
  .textext({
    plugins : 'tags autocomplete arrow prompt',
    prompt: 'Add skills you wish to sort by'
  })
  .bind('getSuggestions', function(e, data)
  {
    var list = [
        'JavaScript',
        'React',
        'React-Native',
        'NodeJS',
        'ExpressJs',
        'Firebase',
        'MongoDB',
        'Git',
        'CouchDB',
        'Python',
        'Java',
        'Android',
        'Ruby on Rails',
        'AngularJS',
        'BlazeJS',
        'MeteorJS',
        'PostgreSQL',
        'SQL',
        'Unity3D',
        'c#',
      ],
    textext = $(e.target).textext()[0],
    query = (data ? data.query : '') || '';

    $(this).trigger(
      'setSuggestions',
      { result : textext.itemManager().filter(list, query) }
    );
  }
);

$('.text-wrap').addClass('form-control');
$('.text-wrap')[0].style.padding = 0;
$('.text-wrap')[0].style.height = '22px';
$('form').submit(e => {
  e.preventDefault();
  console.log(e);
});
