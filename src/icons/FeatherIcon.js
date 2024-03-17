const FeatherIcon = {
    name: 'FeatherIcon',
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
                    render('path', {d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}),
                    render('line', {x1: "16", y1: "8", x2: "2", y2: "22"}),
                    render('line', {x1: "17.5", y1: "15", x2: "9", y2: "15"})
                ]
            )
        }
    }
}

export default FeatherIcon
