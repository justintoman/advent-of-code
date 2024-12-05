import * as days2024 from "./2024";

function run() {
  console.log(INTRO);
  for (const day of Object.values(days2024)) {
    typeof day === "function" && day();
  }
}

const INTRO = `
    _      _             _   
   /_\  __| |_ _____ _ _| |_ 
  / _ \/ _\` \ V / -_) ' \  _|
 /_/ \_\__,_|\_/\___|_||_\__|
   ___   __                  
  / _ \ / _|                 
 | (_) |  _|                 
  \___/|_|     _             
  / __|___  __| |___         
 | (__/ _ \/ _\` / -_)        
  \___\___/\__,_\___|        
 |_  )  \_  ) | |            
  / / () / /|_  _|           
 /___\__/___| |_|            
                             
`;

run();
