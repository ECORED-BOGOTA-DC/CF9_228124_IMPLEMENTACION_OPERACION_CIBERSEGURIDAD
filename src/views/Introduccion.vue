<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .container-100.pt-4(style="background: linear-gradient(180deg, rgba(220,206,227,1) 50%, rgba(255,255,255,1) 50%);")
      .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
        img(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px" alt="Imagen decorativa de un documento")
        p.ps-md-4.mb-0 Le invitamos a adentrarse en el estudio de este componente, reconociendo el valor fundamental que tiene para su formación como tecnólogo/a en implementación y operación de la ciberseguridad.
      
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
