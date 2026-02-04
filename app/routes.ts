import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Inicio/Inicio.tsx"),
    route("inicio", "routes/Inicio/Inicio.tsx", {id: "custom-inicio-route"}),
    route("imc", "routes/Imc/Imc.tsx"),
    route("Ppt", "routes/Ppt/Ppt.tsx"),
] satisfies RouteConfig;
