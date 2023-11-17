<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Metodología para la auditoría en sistemas

    .col-xl-10.mx-auto.d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema10/img-1.png" style="max-width: 400px" alt="imagen decorativa")
      .col-lg-7.ps-lg-4
        .bloque-texto-b.bloque-texto-b-edit.color-primario.p-4
          .bloque-texto-b__texto
            p.mb-0 La aplicación de las auditorías en sistemas debe estar regida por una metodología que oriente los procesos necesarios a desarrollar y que explique los pasos que se deben de realizar. #[em La Guía de Auditoría] N.° 15 del MINTIC, propone una metodología para el desarrollo de una auditoría de sistemas.
    

    p.mb-5 A continuación, puede revisar la metodología para una auditoría de sistemas.

    img.mx-auto.mb-5(src="@/assets/curso/temas/tema10/img-2.svg" style="max-width: 714px" alt="imagen decorativa")
    p.mb-5 La metodología para la realización de una auditoría de sistemas, contempla pasos cabales que aseguran efectividad y oportunidad en el proceso mismo de la auditoría.
    ul.lista-ul--color.mb-5
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Planear cómo se llevará a cabo la auditoría.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Razones de la auditoría.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Objetivos generales y específicos.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Métodos, técnicas y procedimientos.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Hasta la elaboración de la documentación de planes, programas y presupuestos.
    .container-title.mb-5
      h3 Métricas
    
    p.mb-5 Las métricas permiten establecer un nivel de medición cuantitativo en relación al cumplimiento de un requisito, de un control que implementó la organización para alcanzar un objetivo. Estas métricas están organizadas en dos categorías: métrica directa y métrica indirecta.

    .d-flex.flex-wrap.col-xl-9.mb-5.ps-xl-5.ms-xl-5.justify-content-center.justify-content-xl-start
      img.col-lg-6.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema10/img-3.svg" style="max-width: 501px" alt="imagen decorativa métrica indirecta")
      img.col-lg-6.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema10/img-4.svg" style="max-width: 501px" alt="imagen decorativa métrica directa")

    p.mb-4 En el caso de métricas enfocadas en seguridad, estas permiten evaluar los controles implementados, cómo se cumplen los objetivos de seguridad establecidos por la organización, permitiendo identificar el grado de afectación que puede recibir un activo de información por la materialización de alguna amenaza.
      br
      |Las métricas de seguridad son usadas, en las auditorías, para:
    ul.lista-ul--color.mb-4
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Gestión de la seguridad de la información en una organización.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Brindar la información necesaria para la generación de informes.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Cumplir con legislación, reglamentación y normas que rigen una organización.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Apoyar la gestión de riesgos.
    p.mb-4 Las métricas deben conservar las algunas características:
    ul.lista-ul--color.mb-5
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Deben ser alcanzables.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Debe ser expresadas en escalas de porcentaje o escalas numéricas.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Deben explicar los componentes evaluados.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Deben permitir identificar puntos débiles.
      li
        i.fas.fa-check(style="color: #8F52F5")
        | Debe permitir conocer los riesgos a los que se enfrenta la organización.

    .container-title.mb-5
      h3 Medición de la seguridad en la organización
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 1.
      span Niveles de decisión de una organización
    img.col-xl-9.mb-5.mx-auto(src="@/assets/curso/temas/tema10/img-5.svg" style="max-width: 877px" alt="Figura que presenta los niveles de una organización y se describen a continuación de la imagen.")

    p.mb-5 Uno de los objetivos de las estrategias de seguridad es garantizar los pilares de la seguridad de la información a partir de la implementación de estrategias, acciones y controles… pero, anteriormente, estos deben poder medirse para conocer el grado de eficiencia; es aquí donde se hace uso de las métricas, las cuales favorecen la identificación del nivel de apropiación en lo operativo, lo táctico y lo estratégico: los tres niveles de decisión, calves, en la organización.

    .container-title.mb-5
      h3 Cómo se mide la seguridad en una organización
    
    img.col-xl-10.mb-5.mx-auto(src="@/assets/curso/temas/tema10/img-6.svg" style="max-width: 1030px" alt="Cómo se mide la seguridad en una organización")
    p.mb-5 Los objetivos de seguridad de la organización deben alinearse con los objetivos de negocio de la organización, de tal manera que se identifiquen los procesos que se deben cubrir, permitiendo identificar y establecer los controles necesarios. 
      br
      |Es así como se posibilita un mejor proceso de medición de la seguridad en una organización.
    p.mb-5 A continuación, se describen los diferentes niveles de decisión en las métricas de seguridad:

    .container-title.mb-5
      h3 Métricas de seguridad para cada uno de los niveles de decisión
    p.mb-5 A continuación, se describen los diferentes niveles de decisión en las métricas de seguridad:

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.mb-5.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema10/img-7.png" style="max-width: 295px" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.ps-lg-4
        TabsA.color-primario
          .tarjeta.p-4(titulo="1. Métricas de nivel estratégico" style="background-color: #FCF5E9")
            ul.lista-ul--color.mb-5
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Conocer el % (tanto por ciento) de las cuentas inactivas de usuario, deshabilitadas. respecto al total de cuentas inactivas.
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Conocer el valor total de los incidentes de seguridad informática respecto al presupuesto total de seguridad informática.
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Conocer el % (tanto por ciento) de los nuevos funcionarios que completaron su entrenamiento de seguridad respecto al total de los nuevos funcionarios que ingresaron.
            p.mb-0 El propósito de esta métrica es el desempeño de personas y procesos.  

          .tarjeta.p-4(titulo="2. Métricas del nivel táctico" style="background-color: #FCF5E9")
            ul.lista-ul--color.mb-5
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Conocer el número de mensajes salientes con spyware o virus.
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Número de mensajes de spam detectado, respecto al número total de mensajes ignorados.
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Número de estaciones de trabajo en funcionamiento, configuradas correctamente, respecto al total de estaciones de trabajo.
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Número de spyware o virus detectados en estaciones de trabajo o servidores.
            p.mb-0 El propósito de esta métrica es el desempeño de las tecnologías de seguridad informática. 

          .tarjeta.p-4(titulo="3. Métricas del nivel operativo" style="background-color: #FCF5E9")
            ul.lista-ul--color.mb-5
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Número de incidentes asociados con la disponibilidad respecto al total de incidentes.
              li
                i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
                | Número de incidentes asociados con la confidencialidad respecto al total de incidentes.
            p.mb-0 Propósito de esta métrica: desempeño de la administración de incidentes. 

 


</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema10',
  components: { TabsA },
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
