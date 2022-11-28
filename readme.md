# React Native + React Navigation v6 pruebas

Pruebas con react navigation y una navegación medio compleja, con el objetivo de dejarlo todo como base lo más limpio posible y con tipado typescript en la navegación.

## Estructura de la navegación
- MainNavigation
  - Home
  - Register
  - LoggedIn
    - (DrawerNav)
      - Projects
        - (ProjectsStackNavigator)
          - Projects List
          - Project Detail
          - Project Detail Comment Filter
            - (ProjectDetailCommentStackNavigator)
              - Project Detail Comments Filter Screen
              - Project Detail Comments Filter SubScreen
          - Project Detail Comments Create
      - Sample
      - Another Sample
    
