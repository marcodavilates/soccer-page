      $(function(){
        $("[data-toggle=tooltip]").tooltip();
      });
      
      $("#messimodal").on('show.bs.modal', function (e) {
        console.log('Se abrio el modal');
        $('#botonmessi').removeClass('btn-success');
        $('#botonmessi').addClass('btn-warning');
        $('#botonmessi').prop('disabled', true);
      });
      $("#messimodal").on('shown.bs.modal', function (e) {
        console.log('Se termino de abrir el modal');
      });
      $("#messimodal").on('hide.bs.modal', function (e) {
        console.log('Se cerro el modal');
        $('#botonmessi').removeClass('btn-warning');
        $('#botonmessi').addClass('btn-success');
        $('#botonmessi').prop('disabled', false);
        $('#botonmessi').button('dispose');
      });
      $("#messimodal").on('hidden.bs.modal', function (e) {
        console.log('Se termino de cerrar el modal');
      });
      $("#ronaldomodal").on('show.bs.modal', function (e) {
        console.log('Se abrio el modal');
        $('#botonronaldo').removeClass('btn-success');
        $('#botonronaldo').addClass('btn-warning');
        $('#botonronaldo').prop('disabled', true);
      });
      $("#ronaldomodal").on('shown.bs.modal', function (e) {
        console.log('Se termino de abrir el modal');
      });
      $("#ronaldomodal").on('hide.bs.modal', function (e) {
        console.log('Se cerro el modal');
        $('#botonronaldo').removeClass('btn-warning');
        $('#botonronaldo').addClass('btn-success');
        $('#botonronaldo').prop('disabled', false);
      });
      $("#ronaldomodal").on('hidden.bs.modal', function (e) {
        console.log('Se termino de cerrar el modal');
      });
      $("#ronaldinhomodal").on('show.bs.modal', function (e) {
        console.log('Se abrio el modal');
        $('#botonronaldinho').removeClass('btn-success');
        $('#botonronaldinho').addClass('btn-warning');
        $('#botonronaldinho').prop('disabled', true);
      });
      $("#ronaldinhomodal").on('shown.bs.modal', function (e) {
        console.log('Se termino de abrir el modal');
      });
      $("#ronaldinhomodal").on('hide.bs.modal', function (e) {
        console.log('Se cerro el modal');
        $('#botonronaldinho').removeClass('btn-warning');
        $('#botonronaldinho').addClass('btn-success');
        $('#botonronaldinho').prop('disabled', false);
      });
      $("#ronaldinhomodal").on('hidden.bs.modal', function (e) {
        console.log('Se termino de cerrar el modal');
      });
      $("#maradonamodal").on('show.bs.modal', function (e) {
        console.log('Se abrio el modal');
        $('#botonmaradona').removeClass('btn-success');
        $('#botonmaradona').addClass('btn-warning');
        $('#botonmaradona').prop('disabled', true);
      });
      $("#maradonamodal").on('shown.bs.modal', function (e) {
        console.log('Se termino de abrir el modal');
      });
      $("#maradonamodal").on('hide.bs.modal', function (e) {
        console.log('Se cerro el modal');
        $('#botonmaradona').removeClass('btn-warning');
        $('#botonmaradona').addClass('btn-success');
        $('#botonmaradona').prop('disabled', false);
      });
      $("#maradonamodal").on('hidden.bs.modal', function (e) {
        console.log('Se termino de cerrar el modal');
      });
      $("#pelemodal").on('show.bs.modal', function (e) {
        console.log('Se abrio el modal');
        $('#botonpele').removeClass('btn-success');
        $('#botonpele').addClass('btn-warning');
        $('#botonpele').prop('disabled', true);
      });
      $("#pelemodal").on('shown.bs.modal', function (e) {
        console.log('Se termino de abrir el modal');
      });
      $("#pelemodal").on('hide.bs.modal', function (e) {
        console.log('Se cerro el modal');
        $('#botonpele').removeClass('btn-warning');
        $('#botonpele').addClass('btn-success');
        $('#botonpele').prop('disabled', false);
      });
      $("#pelemodal").on('hidden.bs.modal', function (e) {
        console.log('Se termino de cerrar el modal');
      });
      $("#cruyffmodal").on('show.bs.modal', function (e) {
        console.log('Se abrio el modal');
        $('#botoncruyff').removeClass('btn-success');
        $('#botoncruyff').addClass('btn-warning');
        $('#botoncruyff').prop('disabled', true);
      });
      $("#cruyffmodal").on('shown.bs.modal', function (e) {
        console.log('Se termino de abrir el modal');
      });
      $("#cruyffmodal").on('hide.bs.modal', function (e) {
        console.log('Se cerro el modal');
        $('#botoncruyff').removeClass('btn-warning');
        $('#botoncruyff').addClass('btn-success');
        $('#botoncruyff').prop('disabled', false);
      });
      $("#cruyffmodal").on('hidden.bs.modal', function (e) {
        console.log('Se termino de cerrar el modal');
      });
    