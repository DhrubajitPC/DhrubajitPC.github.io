
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