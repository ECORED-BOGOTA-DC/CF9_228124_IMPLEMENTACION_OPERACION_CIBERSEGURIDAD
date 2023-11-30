<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tipos de auditoría
    
    .col-xl-10.mx-auto.d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-1.png" style="max-width: 400px" alt="imagen decorativa" data-aos="fade-right")
      .col-lg-7.ps-lg-4
        .bloque-texto-b.bloque-texto-b-edit.color-primario.p-4(data-aos="fade-left")
          .bloque-texto-b__texto
            p.mb-0 De acuerdo con el momento en que se realiza la auditoría, del alcance de la misma y del auditor que la realiza, estas se pueden clasificar en 3 tipos: de primera parte, de segunda parte o de tercera parte.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      h5 Tabla 1.
      span Tipos de auditoría
    .tabla-a.color-secundario.mb-4(data-aos="fade-left")
      table
        caption.ps-0(style="background-color: transparent; font-weight: normal") Nota: tomado de ISO, 2018.
        thead
          tr(style="background-color: #500C75; color: white;")
            th Auditoría de primera parte
            th Auditoría de segunda parte
            th Auditoría de tercera parte
        tbody
          tr
            td Auditoría interna 
            td Auditoría externa de proveedor 
            td Auditoría de certificación y/o acreditación
          tr
            td
            td Otra auditoría externa de parte interesada 
            td Auditoría legal, reglamentaria o similar
    
    p.mb-5(data-aos="fade-right") Pero, ¿cuáles son las especificidades de cada tipo de auditoría? Aquí se los presentamos; revise la siguiente infografía y descúbralo; le sugerimos tomar nota de ello en su libreta personal de apuntes. ¡Adelante!

    ImagenInfografica.color-acento-contenido.col-xl-10.mx-auto(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img-2.svg' alt='Muestra una infografía de las espesificaciones para cada tipo de auditoría')

      .tarjeta.p-3(x="37.8%" y="10%" numero="" style="background-color: #FFECD4")
        h5 Los tipos de auditoría
        p.mb-0 Las auditorías son de un tipo o de otro, según el momento en que se realiza, según el alcance que esta tiene y según el auditor que la realiza.
      .tarjeta.p-3(x="21.55%" y="28.8%" numero="" style="background-color: #FFECD4")
        h5 Auditoría de primera parte
        p.mb-0 Estas son realizadas por la misma organización o también llamadas #[b auditorías internas], las cuales buscan verificar que se estén aplicando y cumpliendo los requisitos establecidos en la estrategia de seguridad.
      .tarjeta.p-3(x="57.1%" y="46.7%" numero="" style="background-color: #FFECD4")
        h5 Enfoque en su organización
        p.mb-0 En este componente formativo, se enfocará la mirada hacia las #[b auditorías de primera parte o auditorías internas], ya que las demás auditorías son realizadas por terceros. Con este énfasis, se fortalecerá en la identificación de aspectos clave del proceso de evaluación de estrategias de seguridad para su propia organización.
      .tarjeta.p-3(x="16.3%" y="68.9%" numero="" style="background-color: #FFECD4")
        h5 Auditoría de segunda parte
        p.mb-0 Se denominan también auditorías externas; este tipo de auditoría externa es la que evalúa que se estén cumpliendo los requisitos con los proveedores, en relación con el cumplimiento de la estrategia de seguridad.
      .tarjeta.p-3(x="47.8%" y="84.6%" numero="" style="background-color: #FFECD4")
        h5 Auditoría de tercera parte
        p.mb-0 Son las auditorías realizadas por partes externas con fines de certificación o acreditación, aunque también se pueden dar para verificación de cumplimiento legal, reglamentario entre otras.


</template>

<script>
export default {
  name: 'Tema3',
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
