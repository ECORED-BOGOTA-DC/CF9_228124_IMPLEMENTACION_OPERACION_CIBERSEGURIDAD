<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Principios de auditoría

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.col-xl-10.mx-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Entiéndase como principios de auditoría a los elementos y aspectos fundamentales, para desarrollar un ejercicio de auditoría y obtener resultados confiables, objetivos, pertinentes y suficientes para que la organización tome las decisiones apropiadas en el futuro.

    p.mb-5(data-aos="fade-right") Adicional de las técnicas, tipos, definiciones y consideraciones, relacionadas con el proceso de auditoría, hay que tener en cuenta que toda acción en pos de la auditoría, ha de estar orientada por estos principios. Conózcalos a continuación:

    LineaTiempoE.col-12.color-secundario.mb-5
      .row.ps-md-4(titulo="Paso 1" subtitulo="")
        img.mb-4.mb-md-auto.px-0(src="@/assets/curso/temas/tema6/img-2.png" style="max-width: 295px" alt="imagen decorativa" data-aos="fade-right")
        .col-md.ps-md-4(data-aos="fade-left")
          h5 Integridad
          p El auditor debe realizar el ejercicio a partir de su honestidad, imparcialidad, diligencia y responsabilidad, durante toda la auditoría.
      
      .row.ps-md-4(titulo="Paso 2" subtitulo="")
        img.mb-4.mb-md-auto.px-0(src="@/assets/curso/temas/tema6/img-3.png" style="max-width: 295px" alt="imagen decorativa" data-aos="fade-right")
        .col-md.ps-md-4(data-aos="fade-left")
          h5 Presentación ecuánime
          p Los resultados de la auditoría deben reflejar la veracidad y exactitud de la información que se pudo evaluar durante la auditoría.
      
      .row.ps-md-4(titulo="Paso 3" subtitulo="")
        img.mb-4.mb-md-auto.px-0(src="@/assets/curso/temas/tema6/img-4.png" style="max-width: 295px" alt="imagen decorativa" data-aos="fade-right")
        .col-md.ps-md-4(data-aos="fade-left")
          h5 Debido cuidado profesional
          p El auditor debe tener la capacidad de formular juicios de valor razonables durante toda la auditoría. 
      
      .row.ps-md-4(titulo="Paso 4" subtitulo="")
        img.mb-4.mb-md-auto.px-0(src="@/assets/curso/temas/tema6/img-5.png" style="max-width: 295px" alt="imagen decorativa" data-aos="fade-right")
        .col-md.ps-md-4(data-aos="fade-left")
          h5 Confidencialidad
          p La seguridad de la información, durante el ejercicio de la auditoría, es un factor de sumo cuidado. Se debe garantizar que la información, su uso y protección, serán aplicados de manera apropiada.
      
      .row.ps-md-4(titulo="Paso 5" subtitulo="")
        img.mb-4.mb-md-auto.px-0(src="@/assets/curso/temas/tema6/img-6.png" style="max-width: 295px" alt="imagen decorativa" data-aos="fade-right")
        .col-md.ps-md-4(data-aos="fade-left")
          h5 Independencia
          p El auditor se debe considerar y sentir independiente y libre de sesgo y conflicto de intereses, durante todo el ejercicio de la auditoría, lo cual permite realizar una evaluación objetiva.
      
      .row.ps-md-4(titulo="Paso 6" subtitulo="")
        img.mb-4.mb-md-auto.px-0(src="@/assets/curso/temas/tema6/img-7.png" style="max-width: 295px" alt="imagen decorativa" data-aos="fade-right")
        .col-md.ps-md-4(data-aos="fade-left")
          h5 Enfoque basado en la evidencia
          p Los criterios evaluados deben contar con la presentación y verificación de las evidencias correspondientes, lo cual da fe del ejercicio de auditoría dando fiabilidad a ésta.

    img.mx-auto(src="@/assets/curso/temas/tema6/img-8.svg" style="max-width: 610px" alt="imagen decorativa" data-aos="flip-up")
</template>

<script>
export default {
  name: 'Tema6',
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
.linea-tiempo-e
  &::before
    left: 10%
  .linea-tiempo-e__item
    .linea-tiempo-e__item__header
      width: 10%
      h3
        margin-top: 1.2rem
  @media (max-width: 1200px)
    &::before
      left: 15%
    .linea-tiempo-e__item
      .linea-tiempo-e__item__header
        width: 15%
  @media (max-width: 768px)
    &::before
      left: 20%
    .linea-tiempo-e__item
      .linea-tiempo-e__item__header
        width: 20%
        h3
          margin-top: 0
</style>
