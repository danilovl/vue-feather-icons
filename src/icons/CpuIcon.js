const CpuIcon = {
    name: 'CpuIcon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})}

        return function () {
            return render('svg', svg, [
                    render('rect', {x: "4", y: "4", width: "16", height: "16", rx: "2", ry: "2"}),
                    render('rect', {x: "9", y: "9", width: "6", height: "6"}),
                    render('line', {x1: "9", y1: "1", x2: "9", y2: "4"}),
                    render('line', {x1: "15", y1: "1", x2: "15", y2: "4"}),
                    render('line', {x1: "9", y1: "20", x2: "9", y2: "23"}),
                    render('line', {x1: "15", y1: "20", x2: "15", y2: "23"}),
                    render('line', {x1: "20", y1: "9", x2: "23", y2: "9"}),
                    render('line', {x1: "20", y1: "14", x2: "23", y2: "14"}),
                    render('line', {x1: "1", y1: "9", x2: "4", y2: "9"}),
                    render('line', {x1: "1", y1: "14", x2: "4", y2: "14"})
                ]
            )
        }
    }
}

export default CpuIcon
