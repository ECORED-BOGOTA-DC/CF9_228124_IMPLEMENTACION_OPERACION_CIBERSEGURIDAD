<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Perfil del auditor
    
    .col-xl-10.mx-auto.d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema9/img-1.png" style="max-width: 400px" alt="imagen decorativa" data-aos="fade-right")
      .col-lg-7.ps-lg-4
        .bloque-texto-b.bloque-texto-b-edit.color-primario.p-4(data-aos="fade-left")
          .bloque-texto-b__texto
            p.mb-0 El auditor juega un papel importante en el desarrollo del ejercicio de auditoría, ya que además de tener un conocimiento de la organización y los procesos, es quien da fe de la verificación en relación al cumplimiento de las políticas y controles de seguridad, objeto de evaluación.
    p.mb-5(data-aos="fade-right") Además, el auditor debe contar con las siguientes cualidades y capacidades para lograr los objetivos del ejercicio:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      h5 Tabla 2.
      span Cualidades y capacidades de un auditor
    .tabla-b.color-primario(data-aos="fade-left")
      .tabla-b__header
        h4.mb-0 Capacidades y cualidades de un auditor 
      table
        caption.ps-0(style="background-color: transparent; font-weight: normal") Nota: adaptada de Guía de auditoría. MINTIC. (2016).
        tbody
          tr
            td.py-0
            td.py-0
          tr
            td Conocimiento de los procesos de la organización. 
            td Cuenta con habilidades y destrezas. 
          tr
            td Ser diplomático y respetuoso. 
            td Ser objetivo. 
          tr
            td Conocer y aplicar metodología para auditoría. 
            td Ser imparcial y sincero. 
          tr
            td Conocimiento de herramientas, métodos y temas afines. 
            td Tener valores y principios éticos. 
          tr
            td Manejo de técnicas de auditoría. 
            td Ser discreto y manejar el principio de confidencialidad. 
          tr
            td Tener experiencia en temas a evaluar. 
            td Tener capacidad de observación. 
    

</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
