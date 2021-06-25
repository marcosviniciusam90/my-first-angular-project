## Fonte do aprendizado
https://www.algaworks.com/meus-cursos/angular-rest-spring-boot

## Material de apoio
https://www.notion.so/Angular-7048ffec4510468c96cf32c45b3b94f5

## Conceitos
- Bootstrap
- Interpolação
- Event binding
- Property binding
- Two way data binding -> [(ngModel)]
- Diretivas estruturais -> *ngIf, *ngFor
- Diretivas de atributos -> ngStyle, ngClass
- Diretivas customizadas
- Usando property binding em diretivas customizadas
- Exportando API de diretivas customizadas
- Binding de propriedades customizadas com @Input
- Binding de eventos customizados com @Output e EventEmitter
- Respondendo a eventos do hospedeiro com @HostListener
- Vinculando propriedades do hospedeiro com @HostBinding
- Pipes
- Formulários (Template-driven Forms) com validação de dados
- Injeção de dependências
- Requisições REST

## json-server
O json-server nos permite ter um servidor fictício para fazer requisições REST.<br>
Mais informações em https://github.com/typicode/json-server

### Como funciona?
- Cria um arquivo JSON colocando os dados fictícios da API (nesse projeto -> **data/db.json**)
- Para subir o servidor, execute o comando abaixo:
```
json-server --watch [arquivo-json]
json-server --watch data/db.json
```
Obs: o servidor será executado por padrão na porta **3000**.