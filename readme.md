# React Native + React Navigation v6 pruebas

Pruebas con react navigation y una navegación medio compleja, con el objetivo de dejarlo todo como base lo más limpio posible y con tipado typescript en la navegación.

## Estructura de la navegación
- MainNavigation
  - Home
  - Register
  - LoggedIn
    - (DrawerNav)
      - Projects
        - (ProjectsStackNavigator) -> ProjectContext
          - Projects List
          - Project Detail
          - Project Detail Comment Filter
            - (ProjectDetailCommentStackNavigator)
              - Project Detail Comments Filter Screen
              - Project Detail Comments Filter SubScreen
          - Project Detail Comments Create
      - Sample
      - Another Sample
    
La idea es que cada tipo de dato (en este caso y como ejemplo proyectos), tenga su contexto para poder compartir datos (generalmente van a ser los filtros)

## Notas

Los headers de las navegaciones se montan y llega un momento que puede haber 4. Se ha dejado así para tener claro en qué navegación estamos.

Proyectos es un elemento tipo normal con listado, detalle, y elementos relacionados.
