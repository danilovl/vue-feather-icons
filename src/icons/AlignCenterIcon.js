const AlignCenterIcon = {
    name: 'AlignCenterIcon',
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
                    render('line', {x1: "18", y1: "10", x2: "6", y2: "10"}),
                    render('line', {x1: "21", y1: "6", x2: "3", y2: "6"}),
                    render('line', {x1: "21", y1: "14", x2: "3", y2: "14"}),
                    render('line', {x1: "18", y1: "18", x2: "6", y2: "18"})
                ]
            )
        }
    }
}

export default AlignCenterIcon
