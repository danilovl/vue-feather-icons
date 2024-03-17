const UploadCloudIcon = {
    name: 'UploadCloudIcon',
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
                    render('polyline', {points: "16 16 12 12 8 16"}),
                    render('line', {x1: "12", y1: "12", x2: "12", y2: "21"}),
                    render('path', {d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"}),
                    render('polyline', {points: "16 16 12 12 8 16"})
                ]
            )
        }
    }
}

export default UploadCloudIcon
