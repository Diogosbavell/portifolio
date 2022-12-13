
------------------------------------------------------------------------------------
 Desenvolvido por Diogo Borges                                 
------------------------------------------------------------------------------------

 Procedimento para deploy on-line                                                 
 --------------------------------                                                   

 1. O conteúdo da pasta Build (localizada em desafio/dist) contém o essêncial para  
 operação do servidor. O conjunto servidor/ front-end foi desenvolvido em NodeJs e   
 ReactJs;                                                                           
 2. Para colocar o servidor on-line, deve ser criado um arquivo nomeado .env em     
 desafio/dist. Nele deverá conter dados da porta de conexão e informações para      
 conexão ao MySQL. O modelo é apresentado abaixo (usar o nome das variáveis         
 informadas abaixo seguido do respectivo valor de configuração):                   

 PORT= xxxx                                                                        

 MYSQL_DB = xxxx                                                                    
 MYSQL_USER = xxxx                                                                  
 MYSQL_PASSWORD = xxxxx                                                             
 MYSQL_HOST = xxxx                                                                  
 MYSQL_PORT = xxxx                                                                  
                                                                                    
 3. A pasta public (localizada em desafio/dist) deverá ser movida um nível acima    
 do conteúdo localizado em desafio/dist.                                            
 4. Deverá ser dado um npm install em ./desafio para instalar as dependências. A pasta  
 node_modules deverá ser modiva para desafio/dist.                                  
 5. A estrutura geral do servidor deverá ser a seguinte:                            
                                                                                    
 |->server                                                                          
  |-->controllers                                                                   
  |-->database                                                                      
  |-->models                                                                        
  |-->routes                                                                        
  |-->.env                                                                          
  |-->server.js                                                                     
  |-->node_modules                                                                  
 |->public     

 6. O esquema do banco de dados é apresentado no arquivo MySQSchema.md. Por favor abra com o Notepad++.

------------------------------------------------------------------------------------
 Developed by Diogo Borges                                     
------------------------------------------------------------------------------------
  
 Online deployment procedure                                                      
 ---------------------------                                                        
 
 1. The contents of the Build folder, located in challenge/dist, contain the        
 essentials for server operation. The server/front-end set was developed in         
 NodeJs and ReactJs;                                                                
 2. To bring the server online, a file named .env must be created in                
 desafio/dist. It should contain connection port data and information for           
 connection to MySQL. The model is shown below (use the variable names              
 information below followed by the respective configuration value):                 
 
 PORT= xxxx                                                                         
 
 MYSQL_DB = xxxx                                                                    
 MYSQL_USER = xxxx                                                                  
 MYSQL_PASSWORD = xxxxx                                                             
 MYSQL_HOST = xxxx                                                                  
 MYSQL_PORT = xxxx                                                                  

 3. The public folder (located in desafio/dist) must be moved one level above the   
 content located in desafio/dist.                                                   
 4. You must run npm install in /desafio to install the dependencies. The folder    
 node_modules should be modified for desafio/dist.                                  
 5. The structure of the server should be as follows:                               
 
 |->server                                                                          
  |-->controllers                                                                   
  |-->database                                                                      
  |-->models                                                                        
  |-->routes                                                                        
  |-->.env                                                                            
  |-->server.js                                                                     
  |-->node_modules                                                                  
 |->public         

 6. The database schema is presented in the MySQSchema.md file. Please open with Notepad++.



