[1mdiff --git a/src/pages/HomePage.tsx b/src/pages/HomePage.tsx[m
[1mindex 3a7b7ce..13d3a99 100644[m
[1m--- a/src/pages/HomePage.tsx[m
[1m+++ b/src/pages/HomePage.tsx[m
[36m@@ -9,8 +9,7 @@[m [mexport default function HomePage() {[m
           DFL Frontend Starter[m
         </h1>[m
         <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">[m
[31m-          Template React configurado com exemplos funcionais de padrões de mercado. Explore cada[m
[31m-          rota para entender como organizar código em projetos reais.[m
[32m+[m[41m         [m
         </p>[m
       </section>[m
 [m
[36m@@ -46,7 +45,7 @@[m [mexport default function HomePage() {[m
 />[m
         <HubCard[m
   title="Tarefas — passo 2 (service + hook)"[m
[31m-  badge="Aula"[m
[32m+[m[32m  badge="Tarefa"[m
   to="/tarefas"[m
   description="types → dummy → service → useTasks (useState) → TaskCard. Sem React Query."[m
 />[m
