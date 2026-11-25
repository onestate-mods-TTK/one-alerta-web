/* One Alerta Web beta — agenda e dados compatíveis com o documento Firestore Android. */
const FIREBASE_API_KEY = "AIzaSyDMJh6ELwObXpQowGaST6hgY8hFZODryrM";
const GOOGLE_WEB_CLIENT_ID = "236048533090-eg72tk05j7t2976fvu1adoj01qdna0e9.apps.googleusercontent.com";
const FIRESTORE_PROJECT_ID = "agenda-inteligente-7f960";
const EVENTS = [
  {
    "id": "exercito_1100",
    "categoria": "exercito",
    "nome": "Exército",
    "horario": "11:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "exercito_1300",
    "categoria": "exercito",
    "nome": "Exército",
    "horario": "13:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "exercito_1500",
    "categoria": "exercito",
    "nome": "Exército",
    "horario": "15:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "exercito_1700",
    "categoria": "exercito",
    "nome": "Exército",
    "horario": "17:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "exercito_1900",
    "categoria": "exercito",
    "nome": "Exército",
    "horario": "19:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "exercito_2100",
    "categoria": "exercito",
    "nome": "Exército",
    "horario": "21:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "porto_1200",
    "categoria": "porto",
    "nome": "Porto",
    "horario": "12:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "porto_1400",
    "categoria": "porto",
    "nome": "Porto",
    "horario": "14:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "porto_1600",
    "categoria": "porto",
    "nome": "Porto",
    "horario": "16:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "porto_1800",
    "categoria": "porto",
    "nome": "Porto",
    "horario": "18:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "porto_2000",
    "categoria": "porto",
    "nome": "Porto",
    "horario": "20:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "porto_2200",
    "categoria": "porto",
    "nome": "Porto",
    "horario": "22:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1340_calcada",
    "categoria": "pvp",
    "nome": "Calçada da Fama",
    "horario": "13:40",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1520_calcadao",
    "categoria": "pvp",
    "nome": "Calçadão de Hollywood",
    "horario": "15:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1540_costa",
    "categoria": "pvp",
    "nome": "Costa",
    "horario": "15:40",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1620_oeste_hollywood",
    "categoria": "pvp",
    "nome": "Oeste de Hollywood",
    "horario": "16:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1640_centro",
    "categoria": "pvp",
    "nome": "Centro",
    "horario": "16:40",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1720_oeste_compton",
    "categoria": "pvp",
    "nome": "Oeste de Compton",
    "horario": "17:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1725_san_pedro_central",
    "categoria": "pvp",
    "nome": "SAN Pedro central",
    "horario": "17:25",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1740_litoral",
    "categoria": "pvp",
    "nome": "Litoral SAN Pedro",
    "horario": "17:40",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_1745_aeroporto",
    "categoria": "pvp",
    "nome": "Aeroporto",
    "horario": "17:45",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_1820_porto",
    "categoria": "pvp",
    "nome": "Porto",
    "horario": "18:20",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_1825_venice_esquerda",
    "categoria": "pvp",
    "nome": "Venice esquerda",
    "horario": "18:25",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_1840_aterro",
    "categoria": "pvp",
    "nome": "Aterro",
    "horario": "18:40",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_1845_pier",
    "categoria": "pvp",
    "nome": "Pier",
    "horario": "18:45",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_1920_leste_hollywood",
    "categoria": "pvp",
    "nome": "Leste Hollywood",
    "horario": "19:20",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_1925_zona_industrial",
    "categoria": "pvp",
    "nome": "Zona Industrial de Compton",
    "horario": "19:25",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_1940_estacao_uniao",
    "categoria": "pvp",
    "nome": "Estação União",
    "horario": "19:40",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_1945_doca",
    "categoria": "pvp",
    "nome": "Doca",
    "horario": "19:45",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2000_praca_pershing",
    "categoria": "pvp",
    "nome": "Praça Pershing",
    "horario": "20:00",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2005_canais_venice",
    "categoria": "pvp",
    "nome": "Canais de Venice",
    "horario": "20:05",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2020_marina",
    "categoria": "pvp",
    "nome": "Marina",
    "horario": "20:20",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2025_norte_compton",
    "categoria": "pvp",
    "nome": "Norte de Compton",
    "horario": "20:25",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2040_noroeste_san_pedro",
    "categoria": "pvp",
    "nome": "Noroeste de SAN Pedro",
    "horario": "20:40",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2045_centro_compton",
    "categoria": "pvp",
    "nome": "Centro de Compton",
    "horario": "20:45",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2055_centro_medico",
    "categoria": "pvp",
    "nome": "Centro Médico",
    "horario": "20:55",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2105_venice_direita",
    "categoria": "pvp",
    "nome": "Venice Direita",
    "horario": "21:05",
    "vinteEQuatroHoras": true
  },
  {
    "id": "pvp_2120_calcada",
    "categoria": "pvp",
    "nome": "Calçada da Fama",
    "horario": "21:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_2125_calcadao",
    "categoria": "pvp",
    "nome": "Calçadão de Hollywood",
    "horario": "21:25",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_2140_costa",
    "categoria": "pvp",
    "nome": "Costa",
    "horario": "21:40",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_2145_oeste_hollywood",
    "categoria": "pvp",
    "nome": "Oeste de Hollywood",
    "horario": "21:45",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_2220_centro",
    "categoria": "pvp",
    "nome": "Centro",
    "horario": "22:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_2225_oeste_compton",
    "categoria": "pvp",
    "nome": "Oeste de Compton",
    "horario": "22:25",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_2240_san_pedro_central",
    "categoria": "pvp",
    "nome": "SAN Pedro central",
    "horario": "22:40",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_2245_litoral",
    "categoria": "pvp",
    "nome": "Litoral de SAN Pedro",
    "horario": "22:45",
    "vinteEQuatroHoras": false
  },
  {
    "id": "pvp_2300_centro_medico",
    "categoria": "pvp",
    "nome": "Centro Médico",
    "horario": "23:00",
    "vinteEQuatroHoras": false
  },
  {
    "id": "drone_1120",
    "categoria": "drone",
    "nome": "Entrega de Drone",
    "horario": "11:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "drone_1420",
    "categoria": "drone",
    "nome": "Entrega de Drone",
    "horario": "14:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "drone_1820",
    "categoria": "drone",
    "nome": "Entrega de Drone",
    "horario": "18:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "drone_2020",
    "categoria": "drone",
    "nome": "Entrega de Drone",
    "horario": "20:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "drone_2220",
    "categoria": "drone",
    "nome": "Entrega de Drone",
    "horario": "22:20",
    "vinteEQuatroHoras": false
  },
  {
    "id": "drone_2320",
    "categoria": "drone",
    "nome": "Entrega de Drone",
    "horario": "23:20",
    "vinteEQuatroHoras": false
  }
];
const STORAGE = { reminders:"onealerta_reminders", history:"onealerta_history", selected:"onealerta_selected", timezone:"onealerta_timezone", owner:"onealerta_firestore_owner_uid", dirty:"onealerta_firestore_dirty", auth:"onealerta_firebase_auth" };
const $ = (id) => document.getElementById(id);
let reminders = readArray(STORAGE.reminders);
let historyItems = readArray(STORAGE.history);
let selected = readObject(STORAGE.selected, {});
let editingId = null;
let auth = readObject(STORAGE.auth, null);
let deferredInstall = null;
let toastTimer;
let serviceWorkerRegistration = null;
let audioContext = null;
let audioUnlocked = localStorage.getItem("onealerta_sound_enabled") === "true";

function readArray(key){try{const v=JSON.parse(localStorage.getItem(key)||"[]");return Array.isArray(v)?v:[]}catch(e){return []}}
function readObject(key,fallback){try{const v=JSON.parse(localStorage.getItem(key)||"null");return v&&typeof v==="object"?v:fallback}catch(e){return fallback}}
function saveLocal(){localStorage.setItem(STORAGE.reminders,JSON.stringify(reminders));localStorage.setItem(STORAGE.history,JSON.stringify(historyItems));localStorage.setItem(STORAGE.selected,JSON.stringify(selected));localStorage.setItem(STORAGE.timezone, $('timezone')?.value||localStorage.getItem(STORAGE.timezone)||"device");localStorage.setItem(STORAGE.dirty,"true");updateCounts();if(auth?.uid)syncFirestore(false).catch(err=>showToast("Falha ao sincronizar: "+err.message));}
function showToast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),3000)}
function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function dateLabel(ms){if(!ms)return "Data não definida";return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short"}).format(new Date(ms))}
function eventDateLabel(ms,tz){if(!ms)return "";return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:tz}).format(new Date(ms))}
function eventTimezone(){const z=localStorage.getItem(STORAGE.timezone)||"device";return z==="device"?Intl.DateTimeFormat().resolvedOptions().timeZone:z}
function zonedNowParts(tz){const parts=new Intl.DateTimeFormat("en-CA",{timeZone:tz,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date());const o={};for(const p of parts)o[p.type]=p.value;return o}
function minutesInZone(tz){const p=zonedNowParts(tz);return Number(p.hour)*60+Number(p.minute)}
function nextEventDate(time,tz){const [hh,mm]=time.split(":").map(Number);const now=new Date();const p=zonedNowParts(tz);let y=Number(p.year),m=Number(p.month)-1,d=Number(p.day);const targetUtc=Date.UTC(y,m,d,hh,mm);let guess=new Date(targetUtc);const fmt=new Intl.DateTimeFormat("en-US",{timeZone:tz,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"});function offset(date){const q={};for(const x of fmt.formatToParts(date))q[x.type]=x.value;return Date.UTC(+q.year,+q.month-1,+q.day,+q.hour,+q.minute)-date.getTime()}let candidate=new Date(targetUtc-offset(guess));if(candidate.getTime()<=now.getTime()){const tomorrow=new Date(Date.UTC(y,m,d+1,hh,mm));candidate=new Date(tomorrow.getTime()-offset(tomorrow))}return candidate}
function isSelected(e){return selected[e.id]!==false}
function selectedEvents(){return EVENTS.filter(isSelected)}
function categoryLabel(c){return ({exercito:"Exército",porto:"Porto",pvp:"Disputa de Território",drone:"Entrega de Drone"})[c]||c}
function renderEvents(){const target=$("eventGroups");if(!target)return;const cats=["exercito","porto","pvp","drone"];target.innerHTML=cats.map(cat=>{const items=EVENTS.filter(e=>e.categoria===cat);return `<div class="event-category">${categoryLabel(cat)} · ${items.filter(isSelected).length}/${items.length} ativos</div>`+items.map(e=>`<label class="event-card"><span class="event-time">${e.horario}</span><span><span class="event-name">${escapeHtml(e.nome)}</span><span class="event-meta">${escapeHtml(categoryLabel(e.categoria))}</span></span><input class="event-toggle" type="checkbox" data-event="${e.id}" ${isSelected(e)?"checked":""} aria-label="Ativar ${escapeHtml(e.nome)} às ${e.horario}"></label>`).join("")}).join("");target.querySelectorAll("[data-event]").forEach(el=>el.addEventListener("change",()=>{selected[el.dataset.event]=el.checked;localStorage.setItem(STORAGE.selected,JSON.stringify(selected));renderEvents();renderHome();updateCounts()}));}
function reminderCard(r,history=false){return `<article class="reminder-card"><div class="reminder-icon">${history?"✓":"◷"}</div><div class="reminder-body"><div class="reminder-title">${escapeHtml(r.nome||"Lembrete")}</div><div class="reminder-date">${dateLabel(Number(r.data))}</div>${r.mensagem?`<div class="reminder-message">${escapeHtml(r.mensagem)}</div>`:""}</div>${!history?`<div class="card-actions"><button class="icon-btn" data-edit="${r.id}" aria-label="Editar">Editar</button><button class="icon-btn" data-delete="${r.id}" aria-label="Excluir">×</button></div>`:""}</article>`}
function renderReminders(){$("reminderList").innerHTML=reminders.length?reminders.slice().sort((a,b)=>Number(a.data)-Number(b.data)).map(r=>reminderCard(r)).join(""):`<div class="empty">Nenhum lembrete agendado.</div>`;$("historyList").innerHTML=historyItems.length?historyItems.slice().reverse().slice(0,30).map(r=>reminderCard(r,true)).join(""):`<div class="empty">Seu histórico aparecerá aqui.</div>`;$("homeReminders").innerHTML=reminders.length?reminders.slice().sort((a,b)=>Number(a.data)-Number(b.data)).slice(0,3).map(r=>reminderCard(r)).join(""):`<div class="empty">Você ainda não criou lembretes.</div>`;bindReminderActions();updateCounts()}
function bindReminderActions(){document.querySelectorAll("[data-edit]").forEach(b=>b.addEventListener("click",()=>editReminder(b.dataset.edit)));document.querySelectorAll("[data-delete]").forEach(b=>b.addEventListener("click",()=>deleteReminder(b.dataset.delete)))}
function updateCounts(){$("reminderCount").textContent=String(reminders.length);$("eventCount").textContent=String(selectedEvents().length)}
function renderHome(){const tz=eventTimezone();const upcoming=selectedEvents().map(e=>({...e,when:nextEventDate(e.horario,tz)})).sort((a,b)=>a.when-b.when).slice(0,6);$("nextEvents").innerHTML=upcoming.length?upcoming.map(e=>`<article class="event-card"><span class="event-time">${e.horario}</span><span><span class="event-name">${escapeHtml(e.nome)}</span><span class="event-meta">${escapeHtml(categoryLabel(e.categoria))} · próximo horário</span></span><span class="event-meta">${eventDateLabel(e.when.getTime(),tz)}</span></article>`).join(""):`<div class="empty">Nenhum evento selecionado. Ative eventos na aba Eventos.</div>`;renderReminders()}
function archiveOverdueOnStartup(){
  // Lembretes vencidos enquanto o site estava fechado vão para o histórico sem alerta atrasado.
  const now=Date.now();
  const overdue=reminders.filter(r=>Number(r.data)<=now);
  if(!overdue.length)return;
  reminders=reminders.filter(r=>Number(r.data)>now);
  historyItems=historyItems.concat(overdue.map(r=>({...r,vencidoSemAviso:true,arquivadoEm:now})));
  saveLocal();
}
function playReminderSound(){
  if(!audioUnlocked)return;
  try{
    const AudioCtx=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtx)return;
    audioContext=audioContext||new AudioCtx();
    if(audioContext.state==="suspended")audioContext.resume().catch(()=>{});
    const now=audioContext.currentTime;
    [880,660].forEach((frequency,index)=>{
      const oscillator=audioContext.createOscillator();
      const gain=audioContext.createGain();
      const start=now+index*0.22;
      oscillator.type="sine";
      oscillator.frequency.setValueAtTime(frequency,start);
      gain.gain.setValueAtTime(0.0001,start);
      gain.gain.exponentialRampToValueAtTime(0.16,start+0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001,start+0.17);
      oscillator.connect(gain);gain.connect(audioContext.destination);
      oscillator.start(start);oscillator.stop(start+0.18);
    });
  }catch(error){console.warn("Som do lembrete indisponível:",error)}
}
async function notifyReminder(reminder){
  const title=reminder.nome||"Lembrete do One Alerta";
  const body=reminder.mensagem||"Chegou o horário do seu lembrete.";
  playReminderSound();
  if("Notification" in window&&Notification.permission==="granted"){
    try{
      const registration=serviceWorkerRegistration||("serviceWorker" in navigator?await navigator.serviceWorker.ready:null);
      if(registration&&registration.showNotification){
        await registration.showNotification(title,{body,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",tag:"one-alerta-reminder-"+reminder.id,renotify:false,data:{url:"./"}});
      }else{
        new Notification(title,{body,icon:"./assets/icon-192.png",tag:"one-alerta-reminder-"+reminder.id});
      }
      showToast("Lembrete: "+title);
      return;
    }catch(error){console.warn("Notificação do sistema falhou:",error)}
  }
  showToast("Lembrete: "+title+(audioUnlocked?"":" · ative o som em Conta"));
}
function processDueReminders(){
  const now=Date.now();
  const due=reminders.filter(r=>Number(r.data)<=now);
  if(!due.length)return;
  reminders=reminders.filter(r=>Number(r.data)>now);
  historyItems=historyItems.concat(due.map(r=>({...r,concluidoEm:now})));
  due.forEach(r=>notifyReminder(r).catch(error=>console.warn("Falha no alerta:",error)));
  saveLocal();
  renderHome();
}
function updateNotificationUI(){
  const button=$("enableNotifications"),status=$("notificationStatus");
  if(!button||!status)return;
  if(!("Notification" in window)){
    button.textContent="Notificações indisponíveis";button.disabled=true;
    status.textContent="Este navegador não oferece notificações do sistema. O aviso visual dentro do site ainda pode aparecer enquanto ele estiver aberto.";
    return;
  }
  const permission=Notification.permission;
  if(permission==="granted"){
    button.textContent="Notificações ativadas";button.disabled=false;
    status.textContent="Permissão concedida. O alerta do sistema será enviado quando o One Alerta estiver aberto e em execução.";
  }else if(permission==="denied"){
    button.textContent="Permissão bloqueada";button.disabled=true;
    status.textContent="A permissão foi bloqueada neste navegador. Altere a permissão de notificações nas configurações do navegador ou do site.";
  }else{
    button.textContent="Ativar notificações e som";button.disabled=false;
    status.textContent="Toque em Ativar para autorizar as notificações e desbloquear o sinal sonoro.";
  }
}
async function activateNotifications(){
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(AudioCtx){try{audioContext=audioContext||new AudioCtx();await audioContext.resume();audioUnlocked=true;localStorage.setItem("onealerta_sound_enabled","true")}catch(error){console.warn("Não foi possível ativar o som:",error)}}
  if(!("Notification" in window)){updateNotificationUI();showToast("Este navegador não permite notificações do sistema.");return}
  const isApple=/iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone=(window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)||window.navigator.standalone===true;
  if(isApple&&!isStandalone){
    updateNotificationUI();
    showToast("No iPhone, adicione o One Alerta à Tela de Início pelo Safari antes de ativar notificações.");
    return;
  }
  try{
    const permission=Notification.permission==="default"?await Notification.requestPermission():Notification.permission;
    updateNotificationUI();
    if(permission==="granted"){
      playReminderSound();
      showToast("Notificações e som ativados!");
    }else showToast("A permissão de notificações não foi concedida.");
  }catch(error){updateNotificationUI();showToast("Não foi possível ativar notificações neste navegador.")}
}
async function testNotification(){
  if(!audioUnlocked){
    showToast("Primeiro toque em Ativar notificações e som.");
    return;
  }
  playReminderSound();
  if("Notification" in window&&Notification.permission==="granted"){
    try{
      const registration=serviceWorkerRegistration||("serviceWorker" in navigator?await navigator.serviceWorker.ready:null);
      if(registration&&registration.showNotification)await registration.showNotification("Teste do One Alerta",{body:"As notificações estão funcionando neste aparelho.",icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",tag:"one-alerta-test",data:{url:"./"}});
      else new Notification("Teste do One Alerta",{body:"As notificações estão funcionando neste aparelho."});
      showToast("Alerta de teste enviado.");
    }catch(error){showToast("A notificação de teste falhou: "+error.message)}
  }else showToast("Som testado. Conceda também a permissão de notificações.");
}
function resetReminderForm(){editingId=null;$("reminderForm").reset();$("formTitle").textContent="Novo lembrete";$("saveReminder").textContent="Salvar lembrete";$("cancelEdit").classList.add("hidden")}
function editReminder(id){const r=reminders.find(x=>String(x.id)===String(id));if(!r)return;editingId=r.id;$("reminderName").value=r.nome||"";$("reminderMessage").value=r.mensagem||"";const d=new Date(Number(r.data));$("reminderDate").value=new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,16);$("formTitle").textContent="Editar lembrete";$("saveReminder").textContent="Salvar alterações";$("cancelEdit").classList.remove("hidden");document.querySelector('[data-view="reminders"]').click();window.scrollTo({top:0,behavior:"smooth"})}
function deleteReminder(id){if(!confirm("Excluir este lembrete?"))return;reminders=reminders.filter(x=>String(x.id)!==String(id));saveLocal();renderHome();showToast("Lembrete excluído.")}
$("reminderForm").addEventListener("submit",e=>{e.preventDefault();const nome=$("reminderName").value.trim(),mensagem=$("reminderMessage").value.trim(),data=Date.parse($("reminderDate").value);if(!nome||!Number.isFinite(data)||data<=Date.now()){showToast("Escolha um nome e uma data futura.");return}if(editingId!==null){const r=reminders.find(x=>String(x.id)===String(editingId));if(r)Object.assign(r,{nome,mensagem,data})}else{reminders.push({id:Date.now(),nome,mensagem,data,musica:"",volume:100,loop:false})}saveLocal();renderHome();resetReminderForm();showToast("Lembrete salvo.")});
$("cancelEdit").addEventListener("click",resetReminderForm);
$("selectAll").addEventListener("click",()=>{EVENTS.forEach(e=>selected[e.id]=true);localStorage.setItem(STORAGE.selected,JSON.stringify(selected));renderEvents();renderHome()});
$("clearAll").addEventListener("click",()=>{EVENTS.forEach(e=>selected[e.id]=false);localStorage.setItem(STORAGE.selected,JSON.stringify(selected));renderEvents();renderHome()});
$("timezone").value=localStorage.getItem(STORAGE.timezone)||"device";$("timezone").addEventListener("change",()=>{localStorage.setItem(STORAGE.timezone,$("timezone").value);renderHome()});
$("enableNotifications").addEventListener("click",activateNotifications);$("testNotification").addEventListener("click",testNotification);updateNotificationUI();
function showView(name){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===`view-${name}`));document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.view===name));if(name==="events")renderEvents();if(name==="reminders")renderReminders();if(name==="home")renderHome();window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));

// Login Google -> Firebase Authentication REST, igual ao fluxo usado pelo app Android.
function initGoogleLogin(attempt=0){if(!window.google?.accounts?.id){if(attempt<20)return setTimeout(()=>initGoogleLogin(attempt+1),500);return setSyncStatus("O serviço de login Google não carregou. Verifique a internet e recarregue a página.")}google.accounts.id.initialize({client_id:GOOGLE_WEB_CLIENT_ID,callback:handleGoogleCredential,auto_select:false});google.accounts.id.renderButton($("googleButton"),{theme:"filled_black",size:"large",shape:"pill",text:"signin_with",locale:"pt-BR",width:260})}
async function handleGoogleCredential(response){try{setSyncStatus("Conectando conta Google...");const postBody="id_token="+encodeURIComponent(response.credential)+"&providerId=google.com";const res=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${FIREBASE_API_KEY}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postBody,requestUri:location.origin,returnSecureToken:true,returnIdpCredential:true})});const data=await res.json();if(!res.ok)throw new Error(data.error?.message||"Falha no login Firebase");auth={idToken:data.idToken,refreshToken:data.refreshToken,uid:data.localId,email:data.email||"",expiresAt:Date.now()+Number(data.expiresIn||3600)*1000};localStorage.setItem(STORAGE.auth,JSON.stringify(auth));updateAccountUI();await syncFirestore(true);showToast("Conta Google conectada.")}catch(err){setSyncStatus("Não foi possível entrar: "+err.message);showToast("Falha no login Google.")}}
async function validToken(){if(!auth?.refreshToken)throw new Error("Entre com sua conta Google.");if(auth.idToken&&auth.expiresAt>Date.now()+60000)return auth.idToken;const body=new URLSearchParams({grant_type:"refresh_token",refresh_token:auth.refreshToken});const r=await fetch(`https://securetoken.googleapis.com/v1/token?key=${FIREBASE_API_KEY}`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body});const d=await r.json();if(!r.ok)throw new Error(d.error?.message||"Sessão expirada");auth={...auth,idToken:d.id_token,refreshToken:d.refresh_token||auth.refreshToken,expiresAt:Date.now()+Number(d.expires_in||3600)*1000};localStorage.setItem(STORAGE.auth,JSON.stringify(auth));return auth.idToken}
function firestoreUrl(){return `https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT_ID}/databases/(default)/documents/users/${encodeURIComponent(auth.uid)}/agenda/dados`}
async function getRemote(token){const r=await fetch(firestoreUrl(),{headers:{Authorization:"Bearer "+token}});if(r.status===404)return null;const d=await r.json();if(!r.ok)throw new Error(d.error?.message||"Erro ao ler Firestore");return d}
function readRemoteArray(doc,field){try{const raw=doc?.fields?.[field]?.stringValue||"[]";const a=JSON.parse(raw);return Array.isArray(a)?a:[]}catch(e){return []}}
function mergeById(local,remote){const map=new Map();for(const x of [...local,...remote]){const key=x&&x.id!==undefined?"id:"+x.id:"json:"+JSON.stringify(x);if(!map.has(key))map.set(key,x)}return Array.from(map.values())}
async function writeRemote(token){const body={writes:[{update:{name:`projects/${FIRESTORE_PROJECT_ID}/databases/(default)/documents/users/${auth.uid}/agenda/dados`,fields:{lembretesJson:{stringValue:JSON.stringify(reminders)},historicoJson:{stringValue:JSON.stringify(historyItems)}}}}]};const r=await fetch(`https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT_ID}/databases/(default)/documents:commit`,{method:"POST",headers:{Authorization:"Bearer "+token,"Content-Type":"application/json"},body:JSON.stringify(body)});const d=await r.json();if(!r.ok)throw new Error(d.error?.message||"Erro ao salvar Firestore")}
let syncBusy=false;
async function syncFirestore(showMessage){if(!auth?.uid||syncBusy)return;syncBusy=true;setSyncStatus("Sincronizando agenda e histórico...");try{const token=await validToken();const remote=await getRemote(token);const owner=localStorage.getItem(STORAGE.owner)||"";if(!remote){if(!owner||owner===auth.uid){await writeRemote(token)}else{reminders=[];historyItems=[];await writeRemote(token)}}else{const remoteRem=readRemoteArray(remote,"lembretesJson"),remoteHist=readRemoteArray(remote,"historicoJson");if(!owner||owner===auth.uid){const mergedRem=mergeById(reminders,remoteRem),mergedHist=mergeById(historyItems,remoteHist);const changed=JSON.stringify(mergedRem)!==JSON.stringify(remoteRem)||JSON.stringify(mergedHist)!==JSON.stringify(remoteHist);reminders=mergedRem;historyItems=mergedHist;if(changed)await writeRemote(token)}else{reminders=remoteRem;historyItems=remoteHist}}localStorage.setItem(STORAGE.owner,auth.uid);localStorage.setItem(STORAGE.reminders,JSON.stringify(reminders));localStorage.setItem(STORAGE.history,JSON.stringify(historyItems));localStorage.setItem(STORAGE.dirty,"false");renderHome();setSyncStatus("Sincronização concluída.");if(showMessage)showToast("Agenda sincronizada com o Google.")}catch(err){setSyncStatus("Falha na sincronização: "+err.message);if(showMessage)showToast("Não foi possível sincronizar.");throw err}finally{syncBusy=false}}
function setSyncStatus(msg){$("syncStatus").textContent=msg}
function updateNetworkStatus(){const online=navigator.onLine;$("accountStatus").textContent=online?"ONLINE":"SEM INTERNET";$("accountStatus").style.color=online?"var(--green)":"var(--red)";$("accountStatus").title=online?"Conexão com a internet disponível":"Sem conexão com a internet"}
function updateAccountUI(){const logged=!!auth?.uid;updateNetworkStatus();$("accountEmail").textContent=logged?auth.email:"Conecte para sincronizar lembretes.";$("googleButton").classList.toggle("hidden",logged);$("signOut").classList.toggle("hidden",!logged);$("syncNow").classList.toggle("hidden",!logged);if(logged)setSyncStatus("Conta conectada. Seus dados podem ser sincronizados.")}
$("syncNow").addEventListener("click",()=>syncFirestore(true).catch(()=>{}));$("signOut").addEventListener("click",()=>{auth=null;localStorage.removeItem(STORAGE.auth);updateAccountUI();setSyncStatus("Você saiu. Os dados locais permanecem neste aparelho.");showToast("Você saiu da conta.")});
window.addEventListener("online",()=>{updateNetworkStatus();if(auth?.uid)syncFirestore(false).catch(()=>{})});
window.addEventListener("offline",updateNetworkStatus);

async function registerAppServiceWorker(){
  if(!("serviceWorker" in navigator))return;
  try{await navigator.serviceWorker.register("./sw.js");serviceWorkerRegistration=await navigator.serviceWorker.ready;updateNotificationUI()}
  catch(error){console.warn("Service Worker:",error);$("notificationStatus").textContent="Não foi possível ativar o componente de notificações neste navegador."}
}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;$("installAndroid").classList.remove("hidden")});$("installAndroid").addEventListener("click",async()=>{if(!deferredInstall)return;deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null});
archiveOverdueOnStartup();renderEvents();renderHome();updateAccountUI();updateNotificationUI();initGoogleLogin();registerAppServiceWorker();setInterval(processDueReminders,1000);
