const profiles=['Discapacitat auditiva','Discapacitat visual','Discapacitat motriu','Trastorn mental greu','Trastorn greu de conducta','TEA i altres trastorns del desenvolupament neurològic','Dificultats específiques d’aprenentatge','TDAH','Trastorns de la comunicació, el llenguatge i la parla','Malaltia crònica que requerix atenció específica'];
const measures=[
['012345678','Ampliar el temps fins a un 25 %.'],
['1235','Excepcionalment, ampliar el temps fins a un 50 % amb justificació individual.'],
['349','Compensar el temps quan siga necessari interrompre la prova. Cal justificar la interrupció.'],
['01234579','Triar una ubicació específica, si és possible, segons el soroll, la il·luminació o altres interferències.'],
['0123456789','Fer la prova en una aula de suport.'],
['234579','Alçar-se dins de l’aula o eixir durant la prova.'],
['9','Menjar a l’aula.'],['34579','Autoadministrar-se medicació.'],
['16','Utilitzar lletra accessible de tipus Verdana 12 i interlineat d’1,5. En discapacitat visual s’aplica el format individual indicat en l’informe.'],
['17','Modificar l’interlineat, amb justificació en l’informe.'],
['1','Ampliar la lletra, canviar la font amb justificació, utilitzar braille o combinar formats. Descriure gràfics, substituir colors per trames o editar la prova sense taules ni imatges.'],
['0','Rebre instruccions orals per via visual o en llengua de signes. Utilitzar emissora digital, mascareta comunicativa o intèrpret de llengua de signes, segons la necessitat.'],
['12','Utilitzar un faristol.'],['2','Disposar de taula o cadira adaptada i, si correspon, d’un comunicador.'],
['1','Utilitzar lupa, llum, tiposcopi, línia braille, màquina Perkins o braille parlat, segons la barrera.'],
['5','Utilitzar un comunicador o programari específic de suport.'],
['6','Demanar ordinador per disgrafia acreditada, sense contingut, corrector ni connexió a internet.'],
['6','Sol·licitar que no es penalitzen les faltes en matèries no lingüístiques i, per separat, la reducció de penalització en matèries lingüístiques i idiomes estrangers.']];
const health='Consulta els requisits dels informes clínics en «Informes mèdics, salut mental i discapacitat». Identifica la barrera en l’examen i documenta les mesures aplicades.';
const disability='Si al·legues discapacitat, aporta el certificat de grau i el dictamen tècnic facultatiu vigents (33 % o més). Si està en tràmit, adjunta la sol·licitud i els informes presentats per a valorar-la.';
const dea='Per a alumnat escolaritzat, Orientació recull les puntuacions per subescales de PROLEC-ES, PROLEC-SE-R o PROESC, administrades individualment des de secundària, segons la dificultat. Quan concorren lectura i escriptura, documenta cada àrea per separat. L’apartat huité cita PROLEC-SE o PROESC per al llindar d’almenys dos desviacions típiques per davall de la mitjana i entre una i dos per a PROLEC-SE-R. Un cribratge, per si sol, no cobrix este requisit.';
const extra=[
disability+' Per a utilitzar únicament l’audiòfon o una altra pròtesi habitual, seguix la via específica que apareix davall.',
disability+' Precisa la grandària de lletra, el contrast o el format que utilitza la persona i com accedix a gràfics i mapes.',
disability+' Descriu el mobiliari, el dispositiu o les tasques que ha de fer la persona de suport, si se sol·licita.',
'Adjunta un informe de la unitat de salut mental actualitzat en el curs de sol·licitud, amb diagnòstic i data d’inici, i el pla terapèutic si està disponible.',
health,health,dea,health,'Concreta com afecta la necessitat acreditada a la comprensió o expressió i quines mesures s’han utilitzat. Afig els informes que corresponguen segons l’apartat sisé.',
'Adjunta l’informe mèdic. Si no es va necessitar una avaluació sociopsicopedagògica prèvia, no s’exigix emetre l’informe sociopsicopedagògic. Tutoria, amb assessorament d’Orientació, consigna les mesures aplicades i sol·licitades en l’apartat C de l’annex IIB.'];
const routes=['Escolaritzat/ada a la Comunitat Valenciana','Escolaritzat/ada fora de la Comunitat Valenciana','Sense escolaritzar, amb escolarització anterior a la Comunitat Valenciana','Sense escolaritzar, sense escolarització anterior a la Comunitat Valenciana','Accés per a majors de 25, 40 o 45 anys'];
const psych='Informe del curs d’un professional col·legiat de psicologia clínica. Ha d’incloure diagnòstic, criteris internacionals, proves individuals estandarditzades i puntuacions, necessitats i justificació de les adaptacions. En dificultats específiques d’aprenentatge, PROLEC-ES, PROLEC-SE-R, PROESC o similar.';
const certificate='Certificat o informe del centre que va aplicar les mesures, basat en l’expedient, amb les mesures, les necessitats i els cursos o períodes d’aplicació.';
const signature='Annex IIA firmat per la persona interessada o, si és menor, pel pare, la mare o representant legal.';
const routesData=[
['Secretaria del teu centre actual. Entrega l’annex IIA i la documentació exigible que el centre encara no tinga. El centre incorpora els documents del seu expedient o d’ITACA 3.',[signature,'Annex IIB emplenat per Orientació, amb les mesures sol·licitades i la seua justificació.','Informe sociopsicopedagògic actualitzat este curs en ITACA 3, excepte l’excepció de l’apartat sisé.','Informe de mesures de nivells II–III i III–IV d’ITACA 3. Cal desenvolupar la descripció de cada mesura aplicada.']],
['Universitat que corresponga al centre on hages de formalitzar la matrícula de la PAU.',[signature,'Annex IIB emplenat per Orientació del centre actual.','Informe sociopsicopedagògic o equivalent del centre, excepte l’excepció aplicable.',certificate]],
['Secretaria de l’últim centre valencià on vas estar matriculat/ada. El centre incorpora la documentació de què ja disposa. Pots aportar informes escolars anteriors.',[signature,'Annex IIB emplenat per Orientació del centre.',psych,certificate+' També s’admet l’informe de mesures d’ITACA 3.']],
['Universitat on hages de formalitzar la matrícula de la PAU.',[signature,'Annex IIB emplenat per un professional col·legiat de psicologia clínica.',psych,certificate]],
['Universitat on formalitzes la matrícula de la prova de majors, amb independència d’on vas estudiar.',['Sol·licitud mitjançant l’annex III.',psych,'Documentació acreditativa de les mesures prèvies i de les circumstàncies al·legades segons l’apartat sisé.']]];
const byId=id=>document.getElementById(id);
function fill(id,items,defaultValue){const select=byId(id);items.forEach((name,i)=>select.add(new Option(name,i)));select.value=defaultValue;select.addEventListener('change', () => {
 render();
 byId('selection-status').textContent = id === 'need' ? 'Mesures i documentació actualitzades per a ' + profiles[select.value] + '.' : 'Documentació actualitzada per a la situació: ' + routes[select.value] + '.';
});}
function render(){
 const n=Number(byId('need').value),r=Number(byId('route').value);
 const [place,items]=routesData[r];
 const specific=n===0?'<details><summary>Ús habitual d’audiòfons i altres pròtesis auditives</summary><p>Per a alumnat escolaritzat a la Comunitat Valenciana, Orientació emet l’annex VI i el centre l’envia per correu a la universitat de matrícula. En la resta de casos, la persona interessada envia un certificat mèdic. En els dos casos s’identifica el dispositiu i el seu ús habitual. Cal enviar-lo almenys deu dies naturals abans de la prova. L’apartat tercer.7 indica l’assumpte i els correus de cada universitat. Les altres adaptacions seguixen el tràmit ordinari.</p></details>':n===6?'<details open><summary>Com s’aplica la reducció per ortografia?</summary><p>Per a matèries lingüístiques i idiomes estrangers cal justificar que les dificultats de codificació o descodificació persistixen este curs i que no s’han compensat en la trajectòria escolar. Amb la mesura autoritzada, ortografia, cohesió i coherència sumen un màxim conjunt de dos terços de dos punts (4/3) en cada llengua avaluada. Les faltes d’ortografia natural no es penalitzen. Per a sol·licitar ordinador, es justifiquen els criteris de disgrafia i la barrera que compensa.</p></details>':'';
 byId('measures').innerHTML='<div class="grid"><article class="card"><h3>Mesures de l’annex I</h3><ul>'+measures.filter(([cols])=>cols.includes(String(n))).map(([,m])=>'<li>'+m+'</li>').join('')+'</ul></article><article class="card"><h3>Com justificar-ho</h3><p>'+(n===6&&r>=2?psych:extra[n])+'</p><a href="#expediente">Consulta els documents segons l’escolarització</a></article></div>'+specific+'<p class="note">Selecció de mesures per a esta consulta. <a target="_blank" rel="noopener noreferrer" href="https://dogv.gva.es/datos/2026/11/17/pdf/2026_36079_va.pdf#page=13">Consulta la matriu completa de l’annex I (pàg. 13–15)</a></p>';
 byId('docs').innerHTML='<div class="grid"><article class="card"><h3>On presentar-ho</h3><p>'+place+'</p><p>La sol·licitud d’adaptació i la inscripció en la PAU són tràmits diferents.</p></article><article class="card"><h3>Revisa l’expedient</h3>'+items.map(t=>'<label class="check"><input type="checkbox"><span>'+t+'</span></label>').join('')+'<label class="check"><input type="checkbox"><span>Documentació específica de la necessitat seleccionada: '+profiles[n]+'. Revisa la fitxa superior i les excepcions aplicables.</span></label></article></div>';
}
fill('need',profiles,6);fill('route',routes,0);render();
