const MehIcon = {
    name: 'MehIcon',
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
                    render('circle', {cx: "12", cy: "12", r: "10"}),
                    render('line', {x1: "8", y1: "15", x2: "16", y2: "15"}),
                    render('line', {x1: "9", y1: "9", x2: "9.01", y2: "9"}),
                    render('line', {x1: "15", y1: "9", x2: "15.01", y2: "9"})
                ]
            )
        }
    }
}

export default MehIcon
