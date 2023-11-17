<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Fases Sistema de gestión de seguridad de la información
    
    .bloque-texto-g.bloque-texto-g-edit.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Para comenzar con la profundización en los contenidos de este componente formativo, recuerde las fases de un Sistema de Gestión de la Seguridad de la Información. Tenga presente que ella contempla el planear, el hacer, el verificar y el actuar. En este componente, se enfocará la atención en la fase del verificar, en la cual se realizan las diferentes actividades de evaluación de los controles implementados, a partir de unos ejercicios los cuales pueden ser internos, motivados por la misma compañía, o a través de un tercero de acuerdo a las circunstancias y estado de la implementación en la organización. 
    p.mb-5(data-aos="fade-right") Reafirme sus conocimientos en lo referente a las fases del Sistema de Gestión de Seguridad de la Información (SGSI), en  la siguiente infografía:

    .container-100.py-5(style="background-color: rgba(220,206,227,1);")
      ImagenInfografica.col-xl-6.col-lg-8.mx-auto(data-aos="fade-left")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-2.svg' alt='Esta imagen describe las fases del Sistema de Gestión de Seguridad de la Información (SGSI), la cual se divide en 4 fases (Planear, Hacer, Verificar, Actuar)')

        .tarjeta.p-3(x="25.45%" y="16.05%" numero="" style="background-color: #FFECD4")
          ul.lista-ul
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Implementar mejoras.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Tomar acciones preventivas y correctivas.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              |  Comunicar resultados de las acciones tomadas.
        .tarjeta.p-3(x="77.2%" y="16.5%" numero="" style="background-color: #FFECD4")
          ul.lista-ul
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Diseñar SGSI.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Análisis de procesos.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Definir Alcance.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Elaborar política de seguridad.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Identificar y evaluar inventario de activos.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Realizar análisis de riesgos.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Generar SoA.
        .tarjeta.p-3(x="21.85%" y="86.2%" numero="" style="background-color: #FFECD4")
          ul.lista-ul
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Revisiones gerenciales.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Revisiones independientes.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Auditorías internas.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Revisiones técnicas.
        .tarjeta.p-3(x="73.7%" y="86.2%" numero="" style="background-color: #FFECD4")
          ul.lista-ul
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Generar plan de mitigación de riesgos.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Aplicar plan de mitigación de riesgos.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Implementar controles seleccionados.
            li.mb-0.pb-0
              i.me-0.lista-ul__vineta(style="color: #500C75;")
              | Administración de cambio.
            
              
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.bloque-texto-g-edit
  background-color: #FFD947 !important
  @media (min-width: 991px)
    .bloque-texto-g__img
      max-width: 400px
    .bloque-texto-g__texto
      width: calc(100% - 400px)
</style>
