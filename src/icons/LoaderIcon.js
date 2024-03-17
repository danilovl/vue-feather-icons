const LoaderIcon = {
    name: 'LoaderIcon',
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
                    render('line', {x1: "12", y1: "2", x2: "12", y2: "6"}),
                    render('line', {x1: "12", y1: "18", x2: "12", y2: "22"}),
                    render('line', {x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76"}),
                    render('line', {x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07"}),
                    render('line', {x1: "2", y1: "12", x2: "6", y2: "12"}),
                    render('line', {x1: "18", y1: "12", x2: "22", y2: "12"}),
                    render('line', {x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24"}),
                    render('line', {x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93"})
                ]
            )
        }
    }
}

export default LoaderIcon
