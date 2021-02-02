/** 
* this does not work yet
*/
function tagEveryone() {
    let allSpan = document.querySelectorAll('span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.rrkovp55.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.jq4qci2q.a3bd9o3v.ekzkrbhg.oo9gr5id.hzawbc8m');
    let start = 0;
    let stop = 0;
    let textBox = document.querySelector('div._1mf._1mj');
    let dataOffsetTotal = textBox.getAttribute('data-offset-key');
    let count = 0;
    const className = 'diy96o5h';

    allSpan.forEach(function (span) {
        if (span.childNodes[0].nodeName === '#text') {
            let oWrap = document.createElement('span');
            let name = span.innerHTML;
            let iWrap = document.createElement('span');
            let nWrap = document.createElement('span');
            let dataOffset = dataOffsetTotal.substring(0, dataOffsetTotal.indexOf('0')) + count + '-0';
            stop = start + name.length + 1;

            oWrap.setAttribute('start', start);
            oWrap.setAttribute('stop', stop);
            oWrap.setAttribute('class', className);
            oWrap.setAttribute('data-offset-key', dataOffset);
            oWrap.setAttribute('spellcheck', 'false');

            iWrap.setAttribute('data-offset-key', dataOffset);

            nWrap.setAttribute('data-text', 'true');

            nWrap.innerHTML = '@' + name;

            iWrap.appendChild(nWrap);
            oWrap.appendChild(iWrap);
            textBox.appendChild(oWrap);

            start = stop;
            count++;

            console.log(span.innerHTML);
        }
    });
}
