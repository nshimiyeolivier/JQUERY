$(document).ready(function(){
        // AFFICHE UNE ALERT HELLO WORLD APRES LE CHARGEMENT DE LA PAGE
// alert('Hello world');
        // CHANGER LA COULEUR DU PARAGRAPHE AVEC UN ID PARAGRAPHE
// $('#paragraphe').css('color', 'blue');
        // REMPLACE LE TEXTE DU PARAGRAPHE PAR UNE AUTRE AVEC JQUERRY
// $('#paragraphe').text('Texte de remplacement');
        // EN CLICKANT SUR UNE PARAGRAPHE CHANGER LE TEXTE EN COULEUR ROUGE ET SON FONT EN BOLD
$('#paragraphe').on('click', function(){
$(this).css('color', 'red').css('font-weight', 'bold');
});
        // CHENGER LA LARGEUR DE PARAGRAPHE AYANT LA CLASSE article ET SA COULEUR EN bleu
$('.article').each(function(){
  $(this).on('click', function(){
    $(this).width(400).css('color', 'blue');
  });
});

        // QUAND ON CLIQUE SUR LE BOUTON AVEC L'ID BUTTON CHANGER LES PARAGRAPHES AVEC CLASS ARTICLE EN COULEUR ROUGE
$('#button').on('click', function(){
  $('.article').css('color','red');
});

        // ON PEU SELECTIONNER LES DIFFERENTE CLASSEs, IDs ET BALISEs EN LES ATTRUBUANT LES MEMES VALEURS
$('#paragraphe, .article').on('click', function(){
  $(this).css('margin', '50px');
});

        // SELECTIONNER LE PARENT DE LA CLASSE CHILD ET DONNER LUI UNE LARGEUR DE 50% ET CENTRE LE
$('.child').parent('.parent').css('width','50%').css('margin','0 auto');
$('.content').css('width','50%').css('margin','0 auto');


        //SELECTIONNER L'ENFANT ,h1, DONT LE PARENT EST LA CLASSE parent ET ALIGNE LE AU CENTRE
$('.parent').children('h1').css('text-align', 'center');

        //EN CLIQUANT SUR LE PARAGRAPHE DONT LA CLASSE EST child ET DONT LE PARENT EST LA CLASSE parent CHANGER SA COULEUR EN ROUGE
$('.parent').children('.child').on('click', function(){
  $(this).css('font-weight', 'bold').css('color', 'red');
});

        // REMPLACE LE TEXTE D'UNE PARAGRAPHE QUI SE TROUVE DANS UNE CLASSE PARENT content (Une autre maniere de cibre les elements enfants)
 $('.content p').text('texte de remplacement');

        // UNE AUTRE FACON DE REMPLACER LES ELEMENTS EN INTEGRANT LES BASILES HTML DANS LE CODE JS (avec HTML les balise sont convertis)
$('.content p').html('<span> Je suis dans une span </span>');

        // AJOUTER UN ELEMENT APRES UN DIV AVEC CLASS content (ce lui ci ajouter un element apres un div)
$('.content').after('<button class="btn btn-default"> Voir plus </button>');

        // AJOUTER UN ELEMENT APRES UN DIV AVEC CLASS content (ce lui ci ajouter un element avant un div)
$('.content').before('<h1> CHAPITRE 2 </h1>');

        // AJOUTER UN ELEMENT A LA FIN D'UNE PARAGRAPHE DONT LE PARENT EST LA CLASSE content
$('.content p').append('>>');

        // AJOUTER UN ELEMENT AU DEBUT D'UNE PARAGRAPHE DONT LE PARENT EST LA CLASSE content
$('.content p').prepend('<<');

        // MODIFIER LA VALEUR DU LIEN AVEC L'ID link
$('a#link').attr('href', 'http://inyarwanda.com');

        // FAIRE EN SORTE QUE SI ON CLIQUE SUR LE LIEN AVEC UN ID link IL AFFICHE UN ALERT AVEC L'URL DU LIEN SE TROUVAT DANS LA BALISE href
var url = $('a#link').attr('href');
$('#link').on('click', function(){
  alert('voulez vous continuer vers la page'+ ' ' + url);
});

        // VERIFIER SI LE LIEN QUI A COMME ID link A LA CLASSE lien
// alert($('a#link').hasClass('lien'));

        // LORSQU'ON CLIQUE SUR LE BOUTON VIDER IL VIDERA LE CONTENU CIBRE ET AJOUTERA UNE BORDURE ROUGE A LA TITRE (h2)

$('#vider').on('click', function(){
  // $('.content p').empty();
  $('.content p').remove();
        // AJOUTER ET SUPPRIMER UN BORDURE ROUGE AU TITRE FACON if condition
  // if(!$('.content h2').hasClass('bordure')){
  //   $('.content h2').addClass('bordure');
  // }else{
  //   $('.content h2').removeClass('bordure');
  // };

        // AJOUTER ET SUPPRIMER UN BORDURE ROUGE AU TITRE FACON if condition
  $('.content h2').toggleClass('bordure');

});

        // QUAND ON CLIQUE SUR L'ELEMENT QUI A L'ID sec1 IL LA DEPLACE VERS LES CORDONEES INDIQUE DANS LA FONCTION offset()
$('#sec1').on('click', function(){
  $(this).offset({top: 1200, left:50});
});


      // UN BACK TO TOP BOUTON
$('.bttop').on('click', function(){
$(document).scrollTop(0);
  });


      // QUAND ON CLIQUE SUR LE BOUTON MODIFIER LES DIMENSIONS DE L'IMAGE CHANGER EN 300px sur 300px
// $('#modify').on('click', function(){
//   $('.dimimage').width(300).height(300);
// });


    // QUAND ON CLIQUE SUR LE BOUTON MODIFIER LES DIMENSIONS DE L'IMAGE CHANGER PAR RAPORT AU DONNEES ENTRE DANS LES CHAMPS LARGEUR / LONGUEUR PAR L'UTULISATEUR
$('#formulaire').on('submit', function(e){
  e.preventDefault();
  largeur = $('input[name=width]').val();
  longueur = $('input[name=height]').val();

      // on verifie si les données entré sont des chiffres / Nombres
  if(jQuery.isNumeric(largeur) && jQuery.isNumeric(longueur)){
    $('.dimimage').width(largeur).height(longueur);
  }else{
    $('.error').text('Entre que des chiffres svp!').css('color', 'red');
  }

});

    // QUAND ON CLIQUE SUR LE BOUTON CACHER, LE PARAGRAPHE DISPARESSE ET QUAND ON CLIQUE SUR LE BOUTON AFFICHER LE PARAGRAPE REAPPARESSE
// $('#cacher').on('click', function(){
//   $('#article').hide();
//   $(this).hide();
//   $('#afficher').show();
// });
//
// $('#afficher').on('click', function(){
//   $('#article').show();
//   $(this).hide();
//   $('#cacher').show();
// });

      // QUAND ON CLIQUE SUR LE BOUTON CACHER, LE PARAGRAPHE DISPARESSE ET QUAND ON CLIQUE SUR LE BOUTON AFFICHER LE PARAGRAPE REAPPARESSE MAIS CETTE FOIX SI AVEC LES TRANSITIONS
// $('#cacher').on('click', function(){
//   $('#article').fadeOut("slow");
//   $(this).hide();
//   $('#afficher').show();
// });
//
// $('#afficher').on('click', function(){
//   $('#article').fadeIn(2000);
//   $(this).hide();
//   $('#cacher').show();
// });

      // QUAND ON CLIQUE SUR LE BOUTON CACHER, LE PARAGRAPHE DISPARESSE ET QUAND ON CLIQUE SUR LE BOUTON AFFICHER LE PARAGRAPE REAPPARESSE MAIS CETTE FOIX SI AVEC LES SLIDES
$('#cacher').on('click', function(){
$('#article').slideUp("slow");
$(this).hide();
$('#afficher').show();
});

$('#afficher').on('click', function(){
$('#article').slideDown(2000);
$(this).hide();
$('#cacher').show();
});

    // QUAND ON CLIQUE SUR LE BOUTON TOGGLE, LE PARAGRAPHE DISPARESSE / REAPPARESSE

$('#toggle').on('click', function(){
  $('#article').slideToggle('slow');
});



});
