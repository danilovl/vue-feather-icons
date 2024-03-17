const CloudSnowIcon = {
    name: 'CloudSnowIcon',
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
                    render('path', {d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}),
                    render('line', {x1: "8", y1: "16", x2: "8", y2: "16"}),
                    render('line', {x1: "8", y1: "20", x2: "8", y2: "20"}),
                    render('line', {x1: "12", y1: "18", x2: "12", y2: "18"}),
                    render('line', {x1: "12", y1: "22", x2: "12", y2: "22"}),
                    render('line', {x1: "16", y1: "16", x2: "16", y2: "16"}),
                    render('line', {x1: "16", y1: "20", x2: "16", y2: "20"})
                ]
            )
        }
    }
}

export default CloudSnowIcon
