const AnchorIcon = {
    name: 'AnchorIcon',
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
                    render('circle', {cx: "12", cy: "5", r: "3"}),
                    render('line', {x1: "12", y1: "22", x2: "12", y2: "8"}),
                    render('path', {d: "M5 12H2a10 10 0 0 0 20 0h-3"})
                ]
            )
        }
    }
}

export default AnchorIcon
