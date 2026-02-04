import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Inicio/Inicio.tsx"),
    route("inicio", "routes/Inicio/Inicio.tsx", {id: "custom-inicio-route"}),
    route("imc", "routes/Imc/Imc.tsx"),
    route("tercer-menu", "routes/TercerMenu/TercerMenu.tsx", [
        index("components/TercerMenuHome/TercerMenuHome.tsx"),
        route("item-interno", "components/ItemInterno/ItemInterno.tsx"),
    ]),
] satisfies RouteConfig;
